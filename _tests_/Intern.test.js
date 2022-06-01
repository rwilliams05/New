const Intern = require('../lib/Intern');

describe("Interner", () => {

    describe("Initial data entry", () => {
        const name = "Liv";
        const id = 7;
        const email = "liv@xyz.com";
        const school = "UNH";
        const obj = new Intern(name, id, email, school);

        it("should set `name' when data is entered", () => {
            expect(obj.name).toEqual(name);
        })
        it("should set `id' when data is entered", () => {
            expect(obj.id).toEqual(id);
        })
        it("should set `email' when data is entered", () => {
            expect(obj.email).toEqual(email);
        })

        it("should set `github' when data is entered", () => {
            expect(obj.school).toEqual(school);
        })

        it("should set `github' when data is entered", () => {
            expect(obj.role).toEqual("Intern");
        })

    })

    describe("returns employee data ", () => {
        const name = "Liv";
        const id = 7;
        const email = "liv@xyz.com";
        const school = "UNH";
        const role = "Intern";
        const obj = new Intern(name, id, email, school);

        it("getName should return employee name", () => {
            expect(obj.getName()).toEqual(name);
        })

        it("getId should return employee id", () => {
            expect(obj.getId()).toEqual(id);
        })

        it("getEmail should return employee email", () => {

            expect(obj.getEmail()).toEqual(email);
        })

        it("getGithub should return employee GitHub username", () => {
            expect(obj.getSchool()).toEqual(school);
        })

        it("getRole should return employee's role", () => {
            expect(obj.getRole()).toEqual("Intern");
        })
    })
})