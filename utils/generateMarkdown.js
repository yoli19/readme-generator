// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
  ## License

  ${license}
  `;
};

function generateInstallation(installation) {
  if (!installation) {
    return '';
  }
  return `
  ## Installation

  ${installation}
  `;
};

function generateUsage(usage) {
  if (!usage) {
    return '';
  }
  return `
  ## Usage

  ${usage}
  `;
};

function generateContributing(contributing) {
  if (!contributing) {
    return '';
  }
  return `
  ## Contributing

  ${contributing}
  `;
};

function generateTests(tests) {
  if (!tests) {
    return '';
  }
  return `
  ## Tests

  ${tests}
  `;
};

function generateTableOfContents(data) {
  if (!data.installation) {
    return '';
  }
  return `
  - [Installation](#installation)`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  ${generateTableOfContents(data)}
  - [Questions](#questions)

  ${generateInstallation(data.installation)}

  ${generateUsage(data.usage)}

  ${renderLicenseSection(data.license)}

  ${generateContributing(data.contributing)}

  ${generateTests(data.tests)}

  ## Questions

  You can reach me with questions through email at ${data.email}

  [My GitHub](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
