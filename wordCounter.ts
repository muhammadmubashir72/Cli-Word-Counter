#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold(`\n\t Welcome to the CLI Word Counter \n`));
console.log(
      chalk.cyan.bold("\t ^_^_^_^_^_^_^_^_^_^_^_^_^_^_^_^\n"));

      const answer = await inquirer.prompt([
        {
            name:"sentence",
            type: "input",
            message:chalk.yellow("Enter your Sentence:")
        }
    ])
    
    const words = answer.sentence.trim().split(" ")
    console.log(words)
    console.log(chalk.blueBright("The words in your sentence are " + chalk.red.bold(words.length)))
    
