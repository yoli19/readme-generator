// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project. (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to add installation instructions for your project?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
        when: ({confirmInstallation}) => confirmInstallation
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to add usage instructions for your project?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for your project.',
        when: ({confirmUsage}) => confirmUsage
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license to your project?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license for your project.',
        choices: ['Apache 2.0 License','Boost Software License 1.0','Eclipse Public License 1.0','IBM Public License Version 1.0','The MIT License'],
        when: ({confirmLicense}) => confirmLicense
    },
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to add contribution guidelines for your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.',
        when: ({confirmContributing}) => confirmContributing
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to add test instructions for your project?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
        when: ({confirmTests}) => confirmTests
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username. (required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter a github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address. (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
