import inquirer from "inquirer";
import chalk from "chalk"

const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "Python", "javascript"],
    correctAnswer: 2,
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996","1995", "1994", "none of the above",],
    correctAnswer: 1,
  },
];

let score = 0;

async function runQuiz() {
  console.log(chalk.whiteBright("Welcome to the Quiz App"));

  for (const question of questions) {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "selectedAnswer",
        message: question.question,
        choices: question.options,
      },
    ]);

    if (parseInt(answer.selectedAnswer) === question.correctAnswer) {
      console.log(chalk.green("Correct!"));
      score++;
    } else {
      console.log(chalk.red("Incorrect."));
    }
  }

  console.log(chalk.blueBright(`Quiz completed! Your score: ${score}/${questions.length}`));
}

// Repect Program
let repeatFunc = async () => {
    do {
      await runQuiz();
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