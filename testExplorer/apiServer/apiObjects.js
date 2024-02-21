const request = require("supertest"); //supertest
const { expect } = require("chai"); //chai
const baseUrl = require("../globalVariable/baseUrl");
const url = `${baseUrl}`;

async function getMethod(){
    const response = await request(url)
    .get("/objects");
    // Assertions
    expect(response.status).to.equal(200);
    console.log(response.body);
}
module.exports = {getMethod};

async function postMethod(){
    const response = await request(url)
    .post("/objects")
    .send({
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        }
    })
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Apple MacBook Pro 16");
    console.log(response.body);
}
module.exports = {postMethod};

async function putMethod(){
    const response = await request(url)
    .put("/objects")
    .send({
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 2049.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
            "color": "silver"
        }
    })
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Apple MacBook Pro 16");
    console.log(response.body);

}
module.exports = {putMethod};