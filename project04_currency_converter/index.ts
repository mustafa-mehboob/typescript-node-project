import inquirer from 'inquirer';
import chalk from 'chalk';


console.log(chalk.whiteBright(`ℂ𝕦𝕣𝕣𝕖𝕟𝕔𝕪 ℂ𝕠𝕟𝕧𝕖𝕣𝕥𝕖𝕣`));

let Convertion = {
    "PKR": {
      "USD": 0.004434589800443458980044345898,
      "PKR": 1
    },
    "USD": {
        "PKR": 225.50,
        "USD": 1
    },
  }

  const answer: {
    from: "PKR"| "USD",
    to: "PKR"| "USD",
    amount: number
  } = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount: "
    }
  ]);

  const {from, to, amount} = answer;

  if(from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(chalk.blueBright(`Your convertion from ${from} to ${to} is ${result}`))
  } else {
    console.log(chalk.red("Invalid inputs"))
  }