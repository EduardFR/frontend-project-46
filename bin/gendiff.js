#!/usr/bin/env node
import { Command } from 'commander';
import { getProcessedFile } from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(getProcessedFile('file1.json'));
    console.log(getProcessedFile('file2.json'));
  });

program.parse();
