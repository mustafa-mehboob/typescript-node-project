import inquirer from "inquirer";

async function startTimer() {
  console.log("Welcome to the Counter Timer!");

  const timeInput = await inquirer.prompt([
    {
      name: "duration",
      type: "input",
      message: "Enter the duration in seconds:",
    },
  ]);

  const duration = parseInt(timeInput.duration);
  let secondsLeft = duration;

  const timer = setInterval(() => {
    if (secondsLeft > 0) {
      console.clear();
      console.log(`Time remaining: ${secondsLeft} seconds`);
      secondsLeft--;
    } else {
      clearInterval(timer);
      console.clear();
      console.log("Timer completed!");
    }
  }, 1000);
}

// Repect Program
let repeatFunc = async () => {
  do {
    await startTimer();
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
