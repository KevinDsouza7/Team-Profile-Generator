class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    // Return name from input
    getName() {
      return this.name;
    }
  
    // Return ID from input
    getId() {
      return this.id;
    }
  
    // Return email from input
    getEmail() {
      return this.email;
    }
  
    // Return employee type
    getRole() {
      return "Employee";
    }
  }
  
  // Export the Employee class
  module.exports = Employee;
  