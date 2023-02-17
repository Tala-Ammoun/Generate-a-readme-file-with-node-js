import inquirer from 'inquirer';
import fs from "fs/promises"; 

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); //markdown has some static functions inside, one of them is the generate read.me file

// array of questions for user
// const questions = [
//     "What is the title of your project?",
//     "Describe your project",
//     "Table of contents",
//     "How can people install your app?",
//     "How can people use your app?",
//     "Under what license is your app covered?",
//     "How can others contribute?",
//     "How can others test your code?",
//     "If someone has any questions, how can they reach out to you? Ex: GitHub username, GitHub link, or email?"
// ];

const {Title, Description, Table_of_contents, Installation, Usage, License, Contributing, Tests, Questions} = await inquirer.prompt([
    {
        name: "Title",
        message:  "What is the title of your project?",
        type: "input",
    },
    {
        name: "Description",
        message: "Describe your project",
        type: "input",
    },
    {
        name: "Table_of_contents",
        message: "Table of contents",
        type: "input",
    },
    {
        name: "Installation",
        message: "How can people install your app?",
        type: "input",
    },
    {
        name: "Usage",
        message: "How can people use your app?",
        type: "input",
    },
    {
        name: "License",
        message: "Under what license is your app covered?",
        type: "input",
    },
    {
        name: "Contributing",
        message: "How can others contribute?",
        type: "input",
    },
    {
        name: "Tests",
        message: "How can others test your code?",
        type: "input",
    },
    {
        name: "Questions",
        message: "If someone has any questions, how can they reach out to you? Ex: GitHub username, GitHub link, or email?",
        type: "input",
    },
  ])


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", README.md)
}

// function to initialize program
function init() {
    // npm init -y
}

// function call to initialize program
init();

//you can do git status to see if node_modules are included
//the most recent inquirer is 9.1.4