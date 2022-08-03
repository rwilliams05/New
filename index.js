//require modules
const inquirer = require("inquirer");
const fs = require("fs");
//require classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const newTeam = [];

//prompts user to enter team info, beginning with the manager
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

function infoTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "infoRole",
            message: "Would you like to enter another team member? Use arrow keys.",
            choices: ["Yes, an engineer.", "Yes, an intern.", "No. I am finished. Generate my team!"]
        }
    ])
        .then(roleChoice => {
            switch (roleChoice.infoRole) {
                case "Yes, an engineer.":
                    addEngineer();
                    break;
                case "Yes, an intern.":
                    addIntern();
                    break;
                default:
                    generateNewTeam();
            }
        }
        );
};

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "nameEmployee",
                message: `Please enter the employee's name`,
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the name of the employee");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "idEmployee",
                message: `Please enter the employee's ID number`,
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the employee's ID number");
                        return false;
                    }
                    return true;
                },


            },
            {
                type: "input",
                name: "emailEmployee",
                message: "Please enter the employee's's email address",
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the employee's email address");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "githubEngineer",
                message: "Please enter the engineer's GitHub username",
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the engineer's GitHub username");
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.nameEmployee, answers.idEmployee, answers.emailEmployee, answers.githubEngineer)
            newTeam.push(engineer);
            infoTeam();
        });


};

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "nameEmployee",
                message: `Please enter the employee's name`,
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the name of the employee");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "idEmployee",
                message: `Please enter the employee's ID number`,
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the employee's ID number");
                        return false;
                    }
                    return true;
                },


            },
            {
                type: "input",
                name: "emailEmployee",
                message: "Please enter the employee's's email address",
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the employee's email address");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "schoolIntern",
                message: "Please enter the name of the intern's school",
                validate: answer => {
                    if (!answer) {
                        console.log("Please enter the name of the intern's school");
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.nameEmployee, answers.idEmployee, answers.emailEmployee, answers.schoolIntern)
            newTeam.push(intern);
            infoTeam();
        });


};

function generateNewTeam() {
    fs.writeFileSync('team.html', generateHTML(newTeam));
}

infoManager();