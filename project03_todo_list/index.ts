import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.blueBright(`
▀▀█▀▀ █▀▀█ █▀▀▄ █▀▀█ 　 █── ─▀─ █▀▀ ▀▀█▀▀ 
─░█── █──█ █──█ █──█ 　 █── ▀█▀ ▀▀█ ──█── 
─░█── ▀▀▀▀ ▀▀▀─ ▀▀▀▀ 　 ▀▀▀ ▀▀▀ ▀▀▀ ──▀──
`)
);

type Todos = {
  text: string | number;
  id: number;
};
let todos: Todos[] = [];

let addTodo = async () => {
  const input = await inquirer.prompt([
    {
      name: "addTodo",
      type: "input",
      message: chalk.blue("Enter TODO"),
    },
  ]);

  let value = input.addTodo;
  todos.push({
    text: value.trim(),
    id: Math.floor(Math.random() * 100),
  });
};

let displayTodo = async () => {
  if (!todos.length) {
    console.log(chalk.redBright("Empty Todo"));
    return;
  }
  let todo = todos.map((val) => {
    return { name: val.text, value: val };
  });
  const input = await inquirer.prompt([
    {
      name: "slectTdo",
      type: "list",
      message: chalk.bgWhite("Select Todo"),
      choices: todo,
    },
  ]);
};

let dltTodo = async () => {
  if (!todos.length) {
    console.log(chalk.redBright("Empty Todo"));
    return;
  }

  let todo = todos.map((val) => {
    return { name: val.text, value: val.id };
  });
  const input = await inquirer.prompt([
    {
      name: "dltTodo",
      type: "list",
      message: chalk.redBright("Delete Todo"),
      choices: todo,
    },
  ]);
  let value: number = await input.dltTodo;
  todos = todos.filter((val) => val.id !== value);
};

const choose = async () => {
  const input = await inquirer.prompt([
    {
      name: "choose",
      type: "list",
      message: chalk.whiteBright("What You Want To Do"),
      choices: ["Add Todo", "Delete Todo", "Display Todo"],
    },
  ]);
  let value: string = await input.choose;
  if (input.choose === "Add Todo") {
    await addTodo();
  } else if (input.choose === "Delete Todo") {
    await dltTodo();
  } else if (input.choose === "Display Todo") {
    await displayTodo();
  }
  return value;
};


// Repect Program
let repeatFunc = async () => {
  do {
    await choose();
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
