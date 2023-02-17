import inquirer from 'inquirer';
import fs from "fs/promises"; 

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
        type: "list",
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
  # ${Title}
  
  ## Demonstration Video
  ### [] (readme_files_using_nodejs.webm)

  ## Description
  ### ${Description}

  ## Table of Contents
  * [Installation: ] (#Installation) 
  * [Usage: ] (#Usage) 
  * [License: ] (#License)
  * [Contributing: ] (#Contributing)
  * [Tests: ] (#Tests)
  * [Got any questions? ] (#Questions1)
  * [You can find me by my GitHub username: ] (#Questions2)
  * [Checkout more of my projects: ] (#Questions3)

  ## Installation
  ### ${Installation}
  
  ## Usage
  ### ${Usage}

  ## License
  ### ${license(License)}

  ## Who has contributed to this app, and how can you contribute?
  ### ${Contributing}

  ## How can you test the app?
  ### ${Tests}

  ## Got any questions? You can reach out to me on:
  ### ${Questions1}
  ### ${Questions2}
  ### [Github Link: ] (${Questions3})
`
fs.writeFile("readme.md", README) //should be the same as let README = ``

//* [Installation: ] (#Installation) ==>  the *[] is what will be displayed on the page and the # is the link to a specific section.
//${This is how we add variables in temporal literals}