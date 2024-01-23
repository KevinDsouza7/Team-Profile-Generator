const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const path = require("path")
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// Function to gather information about the team manager
async function promptManager() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the team manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the team manager's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the team manager's email address:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the team manager's office number:",
    },
  ]);

  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );

  teamMembers.push(manager);
}

// Function to gather information about an engineer
async function promptEngineer() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email address:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's GitHub username:",
    },
  ]);

  const engineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    answers.github
  );

  teamMembers.push(engineer);
}

// Function to gather information about an intern
async function promptIntern() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email address:",
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school:",
    },
  ]);

  const intern = new Intern(
    answers.name,
    answers.id,
    answers.email,
    answers.school
  );

  teamMembers.push(intern);
}

// Function to prompt user for the next team member or finish building the team
async function promptNextTeamMember() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "nextMember",
      message: "Select the next team member or finish building the team:",
      choices: ["Engineer", "Intern", "Finish building the team"],
    },
  ]);

  return answer.nextMember;
}

// Function to run the application
async function run() {
  // Gather information about the team manager
  await promptManager();

  // Prompt user for the next team member until they decide to finish building the team
  let nextTeamMember = "Engineer"; // Start with Engineer by default
  while (nextTeamMember !== "Finish building the team") {
    if (nextTeamMember === "Engineer") {
      await promptEngineer();
    } else if (nextTeamMember === "Intern") {
      await promptIntern();
    }

    // Prompt user for the next team member or finish building the team
    nextTeamMember = await promptNextTeamMember();
  }

  // Call the render function and generate HTML
  const renderedHtml = render(teamMembers);

  // Check if the output directory exists, create it if not
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  // Write the generated HTML to the team.html file
  fs.writeFileSync(outputPath, renderedHtml);

  console.log(`Team HTML file generated at ${outputPath}`);
}

// Run the application
run();
