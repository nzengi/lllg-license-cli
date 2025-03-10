#!/usr/bin/env node
import { Command } from 'commander';
import { initCommand } from './commands/init';

const program = new Command();

program
    .name('llg')
    .description('LawLinkGlobal License Management CLI')
    .version('1.0.0');

program.addCommand(initCommand);

// Add global error handling
process.on('unhandledRejection', (error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});

program.parse(process.argv); 