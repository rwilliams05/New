const Manager = require('../lib/Manager');

describe("Manager", () => {

    describe("Initial data entry", () => {
        const name = "Jo";
        const id = 1;
        const email = "jo@xyz.com";
        const officeNumber = 11;
        const obj = new Manager(name, id, email, officeNumber);

        it("should set `name' when data is entered", () => {
            expect(obj.name).toEqual(name);
        })
        it("should set `id' when data is entered", () => {
            expect(obj.id).toEqual(id);
        })
        it("should set `email' when data is entered", () => {
            expect(obj.email).toEqual(email);
        })

        it("should set `officeNumber' when data is entered", () => {
            expect(obj.officeNumber).toEqual(officeNumber);
        })

        it("should set `role' when data is entered", () => {
            expect(obj.role).toEqual("Manager");
        })

    })

    describe("returns employee data ", () => {
        const name = "Jo";
        const id = 1;
        const email = "jo@xyz.com";
        const officeNumber = 11;
        const role = "Manager";
        const obj = new Manager(name, id, email, officeNumber);

        it("getName should return employee name", () => {
            expect(obj.getName()).toEqual(name);
        })

        it("getId should return employee id", () => {
            expect(obj.getId()).toEqual(id);
        })

        it("getEmail should return employee email", () => {

            expect(obj.getEmail()).toEqual(email);
        })

        it("getRole should return employee's role", () => {
            expect(obj.getRole()).toEqual("Manager");
        })
    })
})