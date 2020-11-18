const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];



function teamMembers() {
    inquirer.prompt([

        {
            type: "list",
            message: "What is the role of the employee in the company?",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "ended of list",

            ]
        }
    ]).then(employeeRole => {

        switch (employeeRole.role) {
            case "Manager":
                questionManager();
                break;

            case "Engineer":
                questionEngineer();
                break;

            case "Intern":
                questionIntern();
                break;

            case "ended of list":
                buildTeam ();
                break;

        }
    });
}
function questionManager() {
    inquirer.prompt([

        {
            type: "input",
            name: "managerName",
            message: "What is manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is Manager's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is Manager's Email address?",
        },
        {
            type: "input",
            name: "managerNumber",
            message: "What is Manager's office number?",
        },
    ]).then(employeeRole => {
        console.log(employeeRole);
        const manager = new Manager(employeeRole.managerName, employeeRole.managerId, employeeRole.managerEmail, employeeRole.managerNumber)
        employees.push(manager)
        teamMembers();

    });
}
function questionEngineer() {
    inquirer.prompt([

        {
            type: "input",
            name: "engineerName",
            message: "What is engineer's name?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is engineer's Email address?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is engineer's GitHub Username?",
        },
    ]).then(employeeRole => {
        console.log(employeeRole);
        const engineer = new Engineer(employeeRole.engineerName, employeeRole.engineerId, employeeRole.engineerEmail, employeeRole.engineerGithub)
        employees.push(engineer)
        teamMembers();
    });
}
function questionIntern() {
    inquirer.prompt([

        {
            type: "input",
            name: "internName",
            message: "What is Intern's name?",
        },
        {
            type: "input",
            name: "internId",
            message: "What is Intern's ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is Intern's Email address?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is Intern's School?",
        },
    ]).then(employeeRole => {
        console.log(employeeRole);
        const intern = new Intern(employeeRole.internName, employeeRole.internId, employeeRole.internEmail, employeeRole.internSchool)
        employees.push(intern)
        teamMembers();
    });
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFile(outputPath, render(employees), "utf-8", err => {
        if (err) console.log(err)
    })
};

teamMembers ();

