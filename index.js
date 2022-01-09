// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description explaining the what, when, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use?',
        choices: [ 'Apache 2.0', 'GNU General Public', 'MIT']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guildlines for how other developers can contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide tests for your application and how to run them.'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Please provide instructions on how to reach you with additional questions.'
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README successfully generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => { console.log(response);
            const fileNew = generateMarkdown(response);
            const fileName = './generatedfile/generatedREADME.md';

            writeToFile(fileName, fileNew);
        })
}

// Function call to initialize app
init();