import inquirer from "inquirer";
async function startTimer() {
    console.log('Welcome to the Counter Timer!');
    const timeInput = await inquirer.prompt([
        {
            name: 'duration',
            type: 'input',
            message: 'Enter the duration in seconds:',
            // validate: (value) => {
            //   const parsedValue = parseInt(value);
            //   return parsedValue > 0 || 'Please enter a valid positive number';
            // },
        },
    ]);
    const duration = parseInt(timeInput.duration);
    let secondsLeft = duration;
    const timer = setInterval(() => {
        if (secondsLeft > 0) {
            console.clear();
            console.log(`Time remaining: ${secondsLeft} seconds`);
            secondsLeft--;
        }
        else {
            clearInterval(timer);
            console.clear();
            console.log('Timer completed!');
        }
    }, 1000);
}
startTimer();
