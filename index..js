//require modules
const inquirer = require("inquirer");
const fs = require("fs");
//require classes
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const { ChildProcess } = require("child_process");

const newTeam = [];

//prompts user to enter team inf0, beginning with the manager
console.log("Let's build your team.");
function infoManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "nameManager",
                message: `Please enter the manager's name`,
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the name of the manager");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "idManager",
                message: `Please enter the manager's ID number`,
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the manager's ID number");
                        return false;
                    }
                    return true;
                },


            },
            {
                type: "input",
                name: "emailManager",
                message: "Please enter the manager's email address",
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the manager's email address");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "officeNumberManager",
                message: "Please enter the manager's office number",
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the manager's office number");
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.nameManager, answers.idManager, answers.emailManager, answers.officeNumberManager)
            newTeam.push(manager);
            infoTeam();
        });


};

function infoTeam(){
    inquirer.prompt([
     {
         type: "list",
         name: "infoRole",
         message: "Would you like to enter another team member? Use arrow keys.",
         choices: ["Yes, an engineer.", "Yes, an intern.", "No. I am finished. Generate my team!"]
     }   
    ])
    .then(roleChoice =>)
}