// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![alt](https://img.shields.io/badge/License-${license}-blue)`
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   return (` `)
}

//Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   return (` `)
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ## License
${renderLicenseBadge(data.license)}
          
## Table of Content 
- [Project Description](#Description)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Installation](#Installation)
- [Tests](#Tests)
- [Questions](#Questions)
- [Email](#Email)
- [Github](#Github)
## Description
${data.description}
## Usage
${data.usage}
## Contributing
${data.contributors}
## Installation
${data.installation}
## Tests
${data.testInstructions}
## Questions 
${data.questions}
Please contact me using the following links:
## Email
[Email: ${data.email}](mailto:${data.email})
## Github
[GitHub](https://github.com/${data.Github})    
`;
}

module.exports = generateMarkdown;
