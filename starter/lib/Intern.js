const Employee = require('./Employee');

// Intern constructor extends Employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    // Calling the Employee constructor
    super(name, id, email);

    this.school = school;
  }

  // Return school from input
  getSchool() {
    return this.school;
  }

  // Override employee role to Intern
  getRole() {
    return "Intern";
  }
}

// Export the Intern class
module.exports = Intern;
