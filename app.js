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

/*
 1.ask user for which role of employee do they want to add
 2. base on the selection, ask question 
 3. after questions answered, give option if want to add more employee
  3a. if done, wanna build dir
  3b. if not, wanna go back to step 1
*/

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
              "ended of list"
              
            ]}
        ]).then (employeeRole => {

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
                    render(employees);
                    break;

            }
        })

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
                   name: "managerOfficeNumber",
                   message: "What is Manager's office number?",
               },
            ]).then (employeeRole => {
                console.log(employeeRole);
                employees.push(manager)
                teamMembers();
            });
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
            ]).then (employeeRole => {
                console.log(employeeRole);
                employees.push(engineer)
                teamMembers();
            });
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
            ]).then (employeeRole => {
                console.log(employeeRole);
                employees.push(inturn)
                teamMembers();
            })
            module.exports = employees
            teamMembers();

        


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
