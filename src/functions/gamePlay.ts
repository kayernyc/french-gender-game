import chalk from "chalk";
import inquirer from "inquirer";
import { stdout } from "process";
import { frenchWords } from "../data/frenchWords.js";
import { fullExplanation } from "../utilities/fullExplanation.js";
import { FrenchWordRecord } from "../types/FrenchWordRecord.js";
import { randomizeIndexes } from '../utilities/randomizedIndexes.js';

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

let wordsPerRound = 10;
let breakPlay = false;
let infinitePlay = false;
const wordsMissed: FrenchWordRecord[] = []

let wordsTriedCount = 0;
let wordsCorrectCount = 0;

type SubscribeFunction = (evt: string) => void;

const keyListenerPublisher = {
  listenerCallbacks: new Array<SubscribeFunction>(),
  subscribe: (func: SubscribeFunction) => {
    keyListenerPublisher.listenerCallbacks.push(func);
    return () => {
      const index = keyListenerPublisher.listenerCallbacks.indexOf(func);
      keyListenerPublisher.listenerCallbacks.splice(index, 1);
    }
  },
  publish: () => {
    keyListenerPublisher.listenerCallbacks.forEach(func => {
      if (typeof func === 'function') {
        func('exit');
      }
    })
  },
}


const playRound = async (sourceArray: FrenchWordRecord[], arrayOfIndexes: number[], numOfWords = wordsPerRound) => {
  if (numOfWords > arrayOfIndexes.length) {
    randomizeIndexes(sourceArray);
  }
  const currentWords = arrayOfIndexes.splice(0, numOfWords);

  questions:
  for (let i = 0; i < numOfWords; i++) {
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
    let answer: any;

    const close = () => {
      if (answer.question) {
        answer.question.ui.close();
      }

      breakPlay = true;
    }

    const unsubscribe = keyListenerPublisher.subscribe(close.bind(this));
    const currentWordIndex = currentWords[i];
    const currentWordObject = sourceArray[currentWordIndex];

    const { english, french, gender, genderRuleKey, exception, note } = currentWordObject;
    let testPhrase = french;
    if (french.slice(0, 4) !== 'les') {
      testPhrase = `${gender === 0 ? 'un ' : 'une '} ${french}`;
    }



    const responseSentence = gender === 0
      ? `${chalk.bgBlue(` ${testPhrase} `)} is masculine.`
      : `${chalk.bgRed(` ${testPhrase} `)} is feminine.`;

    let explanation = '';
    if (genderRuleKey) {
      explanation = fullExplanation(genderRuleKey, french, exception, note);
    }

    stdout.write(
      `------------------------

Current word: ${chalk.bgWhite.black(` ${french} `)}
${chalk.gray(`English meaning: ${english}`)}

`)

    answer = inquirer.prompt({
      name: 'question',
      type: 'list',
      message: `Is ${chalk.bold(french)} ${chalk.blue('masculine')} or ${chalk.red('feminine')}?`,
      choices: [
        'masculine',
        'feminine'
      ],
    });

    const response = await answer;
    wordsTriedCount += 1;

    const success = (response.question === 'masculine' ? 0 : 1) === gender;
    if (success) {
      if (wordsMissed.includes(currentWordObject)) {
        wordsMissed.splice(wordsMissed.indexOf(currentWordObject), 1);
      }
      wordsCorrectCount += success ? 1 : 0;
    } else {
      arrayOfIndexes.splice(Math.floor(Math.random() * numOfWords), 0, currentWordIndex);
      wordsMissed.push(currentWordObject);
    }


    stdout.write(`
${success ? chalk.green('\u2714') : '\u274C'} That is ${success ? 'correct' : 'incorrect'}.

${responseSentence}
${explanation}



`);

    // clean up listener
    unsubscribe();

    if (breakPlay) {
      infinitePlay = false;
      if (answer.question.ui) {
        answer.question.ui.close();
      }
      break questions;
    } else if (infinitePlay || i < numOfWords - 1) {
      const nextQuestion = await inquirer.prompt({
        name: 'continue',
        type: 'confirm',
        message: 'Next question?',
      });

      if (nextQuestion.continue === false) {
        breakPlay = true;
        infinitePlay = false;
        break questions;
      }
    }
  }

  if (infinitePlay) {
    await playRound(sourceArray, arrayOfIndexes, numOfWords)
  } else {
    if (!breakPlay) {
      const newRoundQuestion = inquirer.prompt({
        name: 'newRound',
        type: 'confirm',
        message: `${chalk.bgWhite.black(' Another round? ')}`,
      });
      const doAnotherRound = await (await newRoundQuestion).newRound;

      if (doAnotherRound) {
        await playRound(sourceArray, arrayOfIndexes, numOfWords);
      }
    }

    sleep();
    return;
  }
};

const wordsMissedMessage = (wordArray = wordsMissed): string => {
  const finalWords = Array.from(new Set(wordArray));

  if (finalWords.length) {
    return 'Words missed: ' + finalWords.map(({ french }) => french).join(', ');
  }
  return '';
};

export const startGame = async (infinite = false, sourceArray = frenchWords) => {
  const arrayOfIndexes = randomizeIndexes(sourceArray);
  await sleep();

  process.stdin.on('keypress', (_, key) => {
    // console.log('from keypress', key)
    if (key.name === "escape") {
      keyListenerPublisher.publish();
    }
  });

  if (infinite) {
    infinitePlay = true;
    stdout.write(`You have selected infinite play!\n\n`)
  } else {
    stdout.write(`Practice recognizing the gender of French nouns.
Select how many words you want to practice up to 2000 words!

`);

    const numWords = await inquirer.prompt({
      name: 'numberWords',
      type: 'number',
      message: 'How many words per round?'
    });

    wordsPerRound = await numWords.numberWords;
  }

  if (wordsPerRound <= 0 || Number.isNaN(wordsPerRound)) {
    wordsPerRound = 10;
    infinitePlay = true;
  }

  await playRound(sourceArray, arrayOfIndexes, wordsPerRound);

  stdout.write(`
  ${chalk.bgBlue(' Game ') + chalk.bgRed(' Over ')}

  ${chalk.bgBlue(' Words ') + chalk.bgWhite.black(' tried: ') + chalk.bgRed(` ${wordsTriedCount} `)}

  ${chalk.bgBlue(' Words ') + chalk.bgWhite.black(' correct: ') + chalk.bgRed(` ${wordsCorrectCount} `)}

  ${wordsMissedMessage()}
  \n`)
  return;
}
