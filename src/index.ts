#!/usr/bin/env node
import chalk from 'chalk';
import yargs from 'yargs/yargs';
import { frenchWords } from './data/frenchWords.js';
import { startGame } from './functions/gamePlay.js';
import { verifyWordListRules } from './functions/verifyWordListRules.js';

console.log(chalk.bgBlue(' French Gender Game '));

verifyWordListRules();

const startHandler = async (argv: unknown) => {
  console.log('from startHandler', { argv });
  await startGame();
  console.log('back!')
}

const argv2 = yargs(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command('start', chalk.green('Start a game.'),
    {}, startHandler)
  .demandCommand(1, 1, 'Start a game!')
  .help('h')
  .alias('h', 'help')
  .argv;
