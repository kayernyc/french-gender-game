import chalk from "chalk";
import inquirer from "inquirer";
import { frenchWords } from "../data/frenchWords.js";
import { endingsPatterns } from '../data/genderPatterns.js';

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

let wordsPerRound = 0;
let arrayOfIndexes: number[];

const randomizeIndexes = () => {
  arrayOfIndexes = [];
  [...Array(frenchWords.length).keys()].forEach((wordIndex: number) => {
    if (arrayOfIndexes.length > 1) {
      const positionIndex = Math.floor(Math.random() * arrayOfIndexes.length);
      arrayOfIndexes.splice(positionIndex, 0, wordIndex)
    } else {
      Math.random() > .5 ? arrayOfIndexes.unshift(wordIndex) : arrayOfIndexes.push(wordIndex)
    }
  });
}

const fullExplanation = (genderRuleKey: number, french: string, exception: boolean): string => {
  const { gender, rule, explanation } = endingsPatterns[genderRuleKey];

  if (rule && !explanation) {
    return `Words ending in "${rule}" are usually ${gender === 0 ? 'masculine' : 'feminine'}.
    ${exception ? `The word «${french}» is an exception.` : ''}
    `
  }

  if (!rule && explanation) {
    return `${explanation}.
    ${exception ? `The word «${french}» is an exception.` : ''}`
  }

  console.warn(`${french} has neither rule nor explanation`);

  return '';

};

const handleAnswer = async (answer: string, gender: number): Promise<boolean> => {
  const inputGender = answer === 'masculine' ? 0 : 1;
  return inputGender === gender;
}

const playRound = async (numOfWords = wordsPerRound) => {
  const currentWords = arrayOfIndexes.splice(0, numOfWords);

  for (let i = 0; i < numOfWords; i++) {
    const currentWordIndex = currentWords[i];

    const { english, french, gender, genderRuleKey, exception } = frenchWords[currentWordIndex];

    const responseSentence = gender === 0
      ? chalk.bgBlue(`Un ${french} is masculine.`)
      : chalk.bgRed(`Une ${french} is feminine.`);

    let explanation = '';
    if (genderRuleKey) {
      explanation = fullExplanation(genderRuleKey, french, exception);
    }

    console.log(
      `------------------------
      Current word: ${chalk.bgWhite.black.bold(` ${french} `)}
English meaning: ${english}
    `)
    const answer = await inquirer.prompt({
      name: 'question',
      type: 'list',
      message: `Is ${chalk.bold(french)} ${chalk.blue('masculine')} or ${chalk.red('feminine')}?`,
      choices: [
        'masculine',
        'feminine'
      ],
    });

    const success = await handleAnswer(answer.question, gender);

    console.log(`
${success ? chalk.green('\u2714') : '\u274C'} That is ${success ? 'correct' : 'incorrect'}.
${responseSentence}
${explanation}



    `);
    await sleep(4000);
  }


  return;
};

export const startGame = async () => {
  randomizeIndexes();
  await sleep();

  console.log(`Practice recognizing the gender of French nouns.
  Select how many words you want to practice up to 2000 words!
      `)

  const numWords = await inquirer.prompt({
    name: 'numberWords',
    type: 'number',
    message: 'How many words per round?'
  });

  wordsPerRound = await numWords.numberWords;
  await playRound(wordsPerRound);
  process.exit(0);
}

