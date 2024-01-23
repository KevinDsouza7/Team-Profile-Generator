
const Employee = require('./Employee');

// Manager constructor extends Employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // Override Employee role to Manager 
    getRole () {
        return "Manager";
    }
}

// To be exported 
module.exports = Manager; 