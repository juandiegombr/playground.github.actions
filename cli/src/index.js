#!/usr/bin/env node

const { program } = require('commander');

program
  .name('cli-tool')
  .description('A command-line interface tool')
  .version('1.0.0');

program
  .command('hello')
  .description('Say hello to someone')
  .argument('[name]', 'name to say hello to', 'World')
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

program.parse(); 