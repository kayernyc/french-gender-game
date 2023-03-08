#!/usr/bin/env node
import chalk from 'chalk';
import yargs from 'yargs/yargs';
import { startGame } from './functions/gamePlay.js';
import { verifyWordListRules } from './functions/verifyWordListRules.js';

console.log(chalk.bgBlue(' French Gender Game '));

verifyWordListRules();

const startOptions = {
  infinite: {
    name: 'infinite',
    alias: 'inf',
    type: 'boolean',
    demandOption: false,
    describe: "Set the game play to be infinite. Break out with -q or escape.",
  }
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const startHandler = async (argv: any) => {
  const { infinite } = argv
  await startGame(!!infinite);
}

yargs(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command('start', chalk.green('Start a game.'),
    startOptions, startHandler)
  .demandCommand(1, 1, 'Start a game!')
  .help('h')
  .alias('h', 'help')
  .argv;
