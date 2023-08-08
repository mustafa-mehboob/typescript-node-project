import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.whiteBright(`🇼​​​​​🇴​​​​​🇷​​​​​🇩​​​​​ 🇨​​​​​🇴​​​​​🇺​​​​​🇳​​​​​🇹​​​​​🇪​​​​​🇷​​​​​`));


const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])

const words = answers.Sentence.trim().split(" ")
console.log(chalk.greenBright(`Your sentence word count is ${words.length}`))