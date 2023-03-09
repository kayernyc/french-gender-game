import chalk from "chalk";
import inquirer from "inquirer";
import { stdout } from "process";
import { frenchWords } from "../data/frenchWords.js";
import { endingsPatterns } from '../data/genderPatterns.js';
import { FrenchWordRecord } from "../types/FrenchWordRecord.js";
import { randomizeIndexes } from '../utilities/randomizedIndexes.js';

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

let wordsPerRound = 10;
let breakPlay = false;
let infinitePlay = false;

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

const fullExplanation = (genderRuleKey: number, french: string, exception: boolean): string => {
  const { gender, rule, explanation } = endingsPatterns[genderRuleKey];

  if (rule && !explanation) {
    return `Words ending in "${rule}" are usually ${gender === 0 ? 'masculine' : 'feminine'}.
    ${exception ? `The word «${french}» is an exception.` : ''}
    `
  }

  if (explanation) {
    return `${explanation}
    ${exception ? `The word «${french}» is an exception.` : ''}`
  }

  console.warn(`${genderRuleKey} has neither rule nor explanation`);

  return '';
};

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

    const { english, french, gender, genderRuleKey, exception } = sourceArray[currentWordIndex];

    const responseSentence = gender === 0
      ? `${chalk.bgBlue(`Un ${french} `)} is masculine.`
      : `${chalk.bgRed(`Une ${french} `)} is feminine.`;

    let explanation = '';
    if (genderRuleKey) {
      explanation = fullExplanation(genderRuleKey, french, exception);
    }

    stdout.write(
      `------------------------
Current word: ${chalk.bgWhite.black.bold(` ${french} `)}
English meaning: ${english}
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
    wordsCorrectCount += success ? 1 : 0;

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
        infinitePlay = false;
        break questions;
      }
    }
  }

  if (infinitePlay) {
    await playRound(sourceArray, arrayOfIndexes, numOfWords)
  } else {
    sleep();
    return true;
  }
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
    Select how many words you want to practice up to 2000 words!`);

    const numWords = await inquirer.prompt({
      name: 'numberWords',
      type: 'number',
      message: 'How many words per round?'
    });

    wordsPerRound = await numWords.numberWords;
  }

  await playRound(sourceArray, arrayOfIndexes, wordsPerRound);

  stdout.write(`
  ${chalk.bgBlue(' Game ') + chalk.bgRed(' Over ')}

  ${chalk.bgBlue(' Words ') + chalk.bgWhite.black(' tried: ') + chalk.bgRed(` ${wordsTriedCount} `)}

  ${chalk.bgBlue(' Words ') + chalk.bgWhite.black(' correct: ') + chalk.bgRed(` ${wordsCorrectCount} `)}
  \n`)
  return;
}
