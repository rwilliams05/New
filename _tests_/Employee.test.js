const Employee = require('../lib/Employee');

describe("Employee", () => {
    
    describe("Initial data entry", () => {
        const name = "Rachel";
        const id = 3;
        const email = "rachel@xyz.com";
        const obj = new Employee(name, id, email);

        it("should set `name' when data is entered", () => {
            expect(obj.name).toEqual(name);
        })
        it("should set `id' when data is entered", () => {
            expect(obj.id).toEqual(id);
        })
        it("should set `email' when data is entered", () => {
            expect(obj.email).toEqual(email);
        })

    })

    describe("returns employee data when requested", () => {
        const name = "Rachel";
        const id = 3;
        const email = "rachel@xyz.com";
        const obj = new Employee(name, id, email);

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
            expect(obj.getRole()).toEqual("Employee");
        })
    })
})