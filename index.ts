#! /usr/bin/env node
// Shebang
import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

const user = await inquirer.prompt([
    {
        message: `${chalk.bold(`${chalk.bgBlueBright("Enter your Name")}`)}`,
        type: "input",
        name: "userName",
    },
]);
console.log(await (`${chalk.cyanBright(`Hi ${user.userName}`)}`));

let answer = await inquirer.prompt([
    {
        message: `${chalk.redBright("Enter First Number")}`,
        type: "number",
        name: "firstNumber",
    },
    {
        message: `${chalk.redBright("Enter Second Number")}`,
        type: "number",
        name: "secondNumber",
    },
    {
        message: `${chalk.magentaBright("Enter Operator")}`,
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);

// console.log(answer);
while (
    answer.firstNumber === '' ||
    answer.secondNumber === '' ||
    answer.firstNumber === null ||
    answer.secondNumber === null ||
    isNaN(answer.firstNumber) ||
    isNaN(answer.secondNumber)
) {
    console.log(`${chalk.bgCyanBright(`${chalk.gray(`Please Enter a Valid input`)}`)}`);
    answer = await inquirer.prompt([
        {
            message: `${chalk.redBright("Enter First Number")}`,
            type: "number",
            name: "firstNumber",
        },
        {
            message: `${chalk.redBright("Enter Second Number")}`,
            type: "number",
            name: "secondNumber",
        },
        {
            message: `${chalk.magentaBright("Enter Operator")}`,
            type: "list",
            name: "operator",
            choices: ["+", "-", "*", "/"],
        },
    ]);
    // process.exit(0); // Exit the process with a non-zero status code
}
if (answer.operator === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please enter a valid operator");
}