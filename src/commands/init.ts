import { Command } from 'commander';
import inquirer from 'inquirer';
import { generateLicense } from '../templates/license';
import { createSpinner } from '../utils/spinner';
import { validateInput } from '../utils/validation';
import { saveLicense, saveMetadata } from '../utils/files';
import chalk from 'chalk';

export const initCommand = new Command('init')
    .description('Initialize a new LLG license')
    .option('-t, --type <type>', 'license type (standard/enterprise)')
    .option('-o, --org <organization>', 'organization name')
    .option('-p, --project <project>', 'project name')
    .option('-k, --key <key>', 'license key (enterprise only)')
    .action(async (cmdOptions) => {
        if (cmdOptions.type === 'enterprise' && !cmdOptions.key) {
            console.error(chalk.red('Error: Enterprise license requires a key'));
            process.exit(1);
        }

        const spinner = createSpinner();

        try {
            const answers = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: 'Select license type:',
                    choices: ['standard', 'enterprise'],
                    default: 'standard',
                    when: !cmdOptions.type
                },
                {
                    type: 'input',
                    name: 'organization',
                    message: 'Enter organization name:',
                    when: !cmdOptions.org,
                    validate: validateInput
                },
                {
                    type: 'input',
                    name: 'projectName',
                    message: 'Enter project name:',
                    when: !cmdOptions.project,
                    validate: validateInput
                },
                {
                    type: 'input',
                    name: 'key',
                    message: 'Enter enterprise license key:',
                    when: (answers) =>
                        (answers.type || cmdOptions.type) === 'enterprise' && !cmdOptions.key
                }
            ]);

            const options = {
                type: (cmdOptions.type || answers.type) as 'standard' | 'enterprise',
                organization: cmdOptions.org || answers.organization,
                projectName: cmdOptions.project || answers.projectName,
                key: cmdOptions.key || answers.key
            };

            spinner.start('Generating license file...');

            const licenseContent = await generateLicense(options);
            await saveLicense(licenseContent);
            await saveMetadata(options);

            spinner.succeed('License file successfully created!');

        } catch (error) {
            spinner.fail('Failed to create license');
            console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
            process.exit(1);
        }
    }); 