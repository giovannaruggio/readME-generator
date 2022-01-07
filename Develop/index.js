// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

// const content = [ 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions' ];

// const checkList = [
//     {
//         type: 'checkbox',
//         name: 'contents',
//         message: 'Please check the boxes of what to be included in your README.',
//         choices: 'tableOfContents'
//     }
// ]

// const checkContents = content.map(checkList);
// console.log(checkContents);

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
        type: 'checkbox',
        name: 'contents',
        message: 'Check the boxes of what to be included in your README.',
        choices: [ 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions' ]
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
        type: 'checkbox',
        name: 'license',
        message: 'Check the box next to the license of your choice.',
        choices: [ 'Apache 2.0', 'GNU General Public', 'MIT', 'The Unlicense', 'None' ]
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
    // {
    //     type: 'input',
    //     name: 'link',
    //     message: 'Please provide a link to your GitHub profile.'
    // },
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
            const fileName = 'README.md';

            writeToFile(fileName, fileNew);
        })
}

// Function call to initialize app
init();