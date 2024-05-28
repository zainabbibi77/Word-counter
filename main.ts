#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.magentaBright("\n\t\tWord counter"));

let userAnswers=await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a sentence",
    }
]);


//trimming the sentence and spilting it into words based on "space"

let words = userAnswers.sentence.trim().split(" ");

console.log("Sentence Words:");
console.log(words);
console.log(`word count : ${words.length}`);
