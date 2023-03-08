import chalk from "chalk";
import inquirer from "inquirer";
import { stdout } from "process";
import { frenchWords } from "../data/frenchWords.js";
import { endingsPatterns } from '../data/genderPatterns.js';

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

let wordsPerRound = 10;
let arrayOfIndexes: number[];
let breakPlay = false;
let infinitePlay = false;

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

  if (explanation) {
    return `${explanation}.
    ${exception ? `The word «${french}» is an exception.` : ''}`
  }

  console.warn(`${genderRuleKey} has neither rule nor explanation`);

  return '';
};

const playRound = async (numOfWords = wordsPerRound) => {
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

    const { english, french, gender, genderRuleKey, exception } = frenchWords[currentWordIndex];

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
    const success = (response.question === 'masculine' ? 0 : 1) === gender;

    stdout.write(`
${success ? chalk.green('\u2714') : '\u274C'} That is ${success ? 'correct' : 'incorrect'}.
${responseSentence}
${explanation}



`);

    // clean up listener
    unsubscribe();

    if (breakPlay) {
      break questions;
    } else {
      const nextQuestion = await inquirer.prompt({
        name: 'continue',
        type: 'confirm',
        message: 'Next question?',
      });

      if (!nextQuestion.continue) {
        break questions;
      }
    }
  }

  if (infinitePlay) {
    playRound()
  }
  return;
};

export const startGame = async (infinite = false) => {
  randomizeIndexes();
  await sleep();

  process.stdin.on('keypress', (_, key) => {
    // console.log('from keypress', key)
    if (key.name === "escape") {
      keyListenerPublisher.publish();
    }
  });

  if (infinite) {
    infinitePlay = true;
    stdout.write(`You have selected infinite play!
        `)
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

  await playRound(wordsPerRound);
  return;
}
