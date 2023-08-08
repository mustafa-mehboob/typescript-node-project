import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.whiteBright(`
𝙎𝙩𝙪𝙙𝙚𝙣𝙩 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩 𝙎𝙮𝙨𝙩𝙚𝙢

`));


class Student {
  constructor(
    private studentId: string,
    private firstName: string,
    private lastName: string,
    private age: number
  ) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class StudentManagementSystem {
  private students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
    console.log(`Student ${student.getFullName()} added.`);
  }

  viewStudents() {
    console.log('Students:');
    this.students.forEach((student) => {
      console.log(
        `Name: ${student.getFullName()}`
      );
    });
  }
}

async function manageStudents() {
  const studentSystem = new StudentManagementSystem();

  while (true) {
    const actionChoice = await inquirer.prompt([
      {
          name: 'selectedAction',
        type: 'list',
        message: 'Select an action:',
        choices: ['Add student', 'View students', 'Exit'],
      },
    ]);

    switch (actionChoice.selectedAction) {
      case 'Add student':
        const studentInput = await inquirer.prompt([
          {
            type: 'input',
            name: 'studentId',
            message: 'Enter student ID:',
          },
          {
            type: 'input',
            name: 'firstName',
            message: 'Enter first name:',
          },
          {
            type: 'input',
            name: 'lastName',
            message: 'Enter last name:',
          },
          {
            type: 'input',
            name: 'age',
            message: 'Enter age:',
          },
        ]);

        const newStudent = new Student(
          studentInput.studentId,
          studentInput.firstName,
          studentInput.lastName,
          parseInt(studentInput.age)
        );

        studentSystem.addStudent(newStudent);
        break;

      case 'View students':
        studentSystem.viewStudents();
        break;

      case 'Exit':
        console.log('Goodbye!');
        return;
    }
  }
}

manageStudents();
