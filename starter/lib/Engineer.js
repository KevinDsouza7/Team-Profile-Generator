const Employee = require("./Employee");

// Engineer constructor extends Employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Calling the Employee constructor
    super(name, id, email);

    this.github = github;
  }

  // Return GitHub from input
  getGithub() {
    return this.github;
  }

  // Override employee role to Engineer
  getRole() {
    return "Engineer";
  }
}

// Export the Engineer class
module.exports = Engineer;
