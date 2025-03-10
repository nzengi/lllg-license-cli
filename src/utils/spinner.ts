import ora from 'ora';
import chalk from 'chalk';

export function createSpinner() {
    const spinner = ora({
        color: 'blue',
        spinner: 'dots'
    });

    return {
        start: (text: string) => spinner.start(chalk.blue(text)),
        succeed: (text: string) => spinner.succeed(chalk.green(text)),
        fail: (text: string) => spinner.fail(chalk.red(text)),
        stop: () => spinner.stop()
    };
} 