const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    describe("Initial data entry", () => {
        const name = "Sam";
        const id = 5;
        const email = "sam@xyz.com";
        const github = "samxyz";
        const obj = new Engineer(name, id, email, github);

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
            expect(obj.github).toEqual(github);
        })

        it("should set `github' when data is entered", () => {
            expect(obj.role).toEqual("Engineer");
        })

    })

    describe("returns employee data ", () => {
        const name = "Sam";
        const id = 5;
        const email = "sam@xyz.com";
        const github = "samxyz";
        const role = "Engineer";
        const obj = new Engineer(name, id, email, github);

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
            expect(obj.getGithub()).toEqual(github);
        })

        it("getRole should return employee's role", () => {
            expect(obj.getRole()).toEqual("Engineer");
        })
    })
})