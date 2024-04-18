import inquirer from "inquirer";
import chalk from "chalk";

let todoList = []; 
let conditions = true;

console.log(chalk.magenta.bold("\n \tWelcome to CodeWithEman - Todo-List Application"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green( "Enter Your New Task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} task added in todo list succesfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name:"addmore",
            type: "confirm",
            message: "do you want to add more task ?",
            default:"false"
        }
    ]);
    conditions = addMoreTask.addmore
}
console.log("YOUR  UPDATED Todo-list:" , todoList);