import inquirer from 'inquirer';
import fs from "fs/promises"; 

//const generateMarkdown = require("./utils/generateMarkdown"); //markdown has some static functions inside, one of them is the generate read.me file

const {Title, Description, Table_of_contents, Installation, Usage, License, Contributing, Tests, Questions1, Questions2, Questions3} = await inquirer.prompt([
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
        choices: ['MIT', 'Apache 2.0', 'GPL', 'none']
    },
    {
        name: "Contributing",
        message: "Who has contributed to this app and how can others contribute?",
        type: "input",
    },
    {
        name: "Tests",
        message: "How can others test your code?",
        type: "input",
    },
    {
        name: "Questions1",
        message: "If someone has any questions, what is your email so that they can reach out to you?",
        type: "input",
    },
    {
        name: "Questions2",
        message: "What is your GitHub username?",
        type: "input",
    },
    {
        name: "Questions3",
        message: "What is your GitHub link?",
        type: "input",
    },
  ])

function license(license){
    if(license !== 'none'){ //if they choose anything except none
        return `[license: ] (https://img.shields.io/badge/license-${license}-blue.svg)` //display a badge
    }
    else {
        return '' //if they choose none, don't display anything.
    }
}

let README = `
  #${Title}

  ##Description
  ###${Description}

  ##Table of Contents
  * [Installation: ] (#Installation) 
  * [License: ] (#License)
  * [Contributing: ] (#Contributing)
  * [Tests: ] (#Tests)
  * [Questions: ] (#Questions)

  ##Installation
  ###${Installation}

  ##License
  ###${license(License)}

  ##Who has contributed to this app, and how can you contribute?
  ${Contributing}

  ##How can you test the app?
  ###${Tests}

  ##Got any questions? You can reach out to me on:
  ###${Questions1}
  ###${Questions2}
  ###[Github Link: ] (https://github.com/${Questions3})
`
fs.writeFile("readme.md", README.md)

//you can do git status to see if node_modules are included. If not included they will be in gray.
//the most recent inquirer is 9.1.4
// temporal literal ` `
//* [Installation: ] (#Installation) ==>  the *[] is what will be displayed on the page and the # is the link to a specific section.
//${This is how we add variables in temporal literals}