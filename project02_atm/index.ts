import inquirer from "inquirer";
import chalk from "chalk";

console.log(`
░█████╗░████████╗███╗░░░███╗
██╔══██╗╚══██╔══╝████╗░████║
███████║░░░██║░░░██╔████╔██║
██╔══██║░░░██║░░░██║╚██╔╝██║
██║░░██║░░░██║░░░██║░╚═╝░██║
╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░╚═╝
`);

let totalAmount = 10000;
// let pin = 1111

// const Input = async () => {
//     let input = await inquirer.prompt([{
//         name: chalk.white(`pin`),
//         type: 'number',
//         message: 'Enter Your PIN'
//     }])

//     if (await input.pin === pin) {
//         console.log(chalk.green("Authentication Successfull"));

//     }else {
//         console.log(chalk.red("Authentication Failed"));
//         Input()
//     }
// }
// Input()

let AmountInput = async () => {
  const input = await inquirer.prompt([
    {
      name: "enterAmount",
      type: "number",
      message: "Enter Amount",
    },
  ]);
  const value: number = await input.enterAmount;
  console.log(value);
  return value;
};

let Withdraw = async () => {
  const amount = await AmountInput();
  if (amount <= totalAmount) {
    totalAmount -= amount;
    console.log(chalk.green(`Successful WithDrawl of ${amount}`));

    return totalAmount;
  } else {
    console.log(chalk.red(`Your amount is less than ${amount}`));
  }
};

let Deposit = async () => {
  const amount = await AmountInput();
  totalAmount += amount;
  console.log(chalk.green(`Successfully Deposit RS: ${amount}`));
};

const atmFunc = async () => {
  const input = await inquirer.prompt([
    {
      name: "slectOpt",
      type: "list",
      message: "Slect Option",
      choices: ["Withdraw Amount", "Deposit Amount", "Available Amount"],
    },
  ]);
  let value: string = await input.slectOpt;
  if (value === "Withdraw Amount") {
    await Withdraw();
  }
  if (value === "Deposit Amount") {
    await Deposit();
  }
  if (value === "Available Amount") {
    console.log(chalk.bgBlackBright.white(`Total Amount: ${totalAmount}`));
  }
};


// Repect Program
let repeatFunc = async () => {
  do {
    await atmFunc();
    var repeat = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to continue (y/n)",
    });
  } while (
    repeat.restart.toLowerCase() === "y" ||
    repeat.restart.toLowerCase() === "yes"
  );
};

repeatFunc();
