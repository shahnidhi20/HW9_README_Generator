// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatemarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Describe in one line the description of the project",
    name: "projDesc",
  },
  {
    type: "list",
    message: "PLease select the license you used for this project.",
    name: "license",
    choices: ["MIT", "Apache", "Mozilla", "npm", "inquirer", "node"],
  },

  {
    type: "input",
    message: "What is the installation steps?",
    name: "installationSteps",
  },
  {
    type: "input",
    message: "What is the project usage?",
    name: "proUsage",
  },
  {
    type: "input",
    message: "Who are the contributors of this projects?",
    name: "proContribution",
  },
  {
    type: "input",
    message: "What are the Tests conducted?",
    name: "protests",
  },
  {
    type: "input",
    message: "How can I reach out if any issues found?",
    name: "questions",
  },
  {
    type: "input",
    message: "Please enter your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "profileURL",
  },
  {
    type: "input",
    message: "What is your Git repo url?",
    name: "repourl",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "emailAddress",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("FileContent:", data);
  fs.writeFile(fileName, data, (error) => {
    error ? console.error(error) : console.log(`${fileName} created`);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    var fileContent = generatemarkdown(answers);
    writeToFile("./output/README.md", fileContent);
  });
}

// Function call to initialize app
init();
