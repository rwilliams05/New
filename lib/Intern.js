const Employee = require('./lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
        getSchool() {
            return (`School: ${this.school}`);
        }

        getRole(){
            return "Intern";
        }
    


}            