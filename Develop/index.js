// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
let userQuestions = [
    {
    type: "input",
    message: "Project title?",
    name: "title",
   },
   {
    type: "input",
    message: "Describe the project?",
    name: "description",
   },
   {
    type: "input",
    message: "Table of Contents.",
    name: "Table of Content",
   },
   {
    type: "input",
    message: "Provide installation instructions.",
    name: "installation",
   },
   {
    type: "input",
    message: "What is the project used for?",
    name: "usage",
   },
   {
    type: "checkbox",
    message: "Do you want to add a license?",
    choices: ["MIT", "Apache 2", "Boost Software License 1.0"],
    name: "license",
   },
   {
    type: "input",
    message: "Who helped contribute to this project?",
    name: "contributors",
   },
   {
    type: "input",
    message: "Do you have any test instructions?",
    name: "testInstructions",
   },
   {
    type: "input",
    message: "Have questions?",
    name: "questions",
   },
      {
    type: "input",
    message: "What is your Github url?",
    name: "Github",
   },
   {
    type: "input",
    message: "What is your email address?",
    name: "email",
   },

];


// Initialize app function
 function init() {
inquirer.prompt(userQuestions)
    .then(function (inquirerAnswers) {
    console.log(inquirerAnswers)
    fs.writeFileSync("README.md", generateMarkdown(inquirerAnswers));
    (err) =>
    err ? console.log(err) : console.log("Successful");
 });
};

// Call to initialize app
init();
