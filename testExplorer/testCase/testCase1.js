//import package

const baseUrl = require("../globalVariable/baseUrl");
const { postMethod, putMethod, getMethod } = require("../apiServer/apiObjects");

// const url = supertest("https://api.restful-api.dev/") //global var url
const url = `${baseUrl}`;

//test suites
describe("Testing API restful", function() {
    // Test case 1
    it("Test GET", async function() {
        getMethod
    });
    // Test Case 2
    it("Test POST", async function() {
        postMethod
    })
    // Test Case 3
    it("Test PUT", async function() {
        putMethod
    })
});