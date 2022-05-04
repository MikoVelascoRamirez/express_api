const request = require('supertest');
const app = require('../app');

describe("Suite's tests for app.js", () => {
    test("1) Getting a 200 status code /GET", async () => {
        const response = await request(app).get('/v1/explorers').send();
        expect(response.statusCode).toBe(200);
    });

    test("2) Proving if the endpoint returns a list /GET", async() => {
        const response = await request(app).get('/v1/explorers').send();
        expect(response._body).toBeInstanceOf(Array);
    });

    test("3) Getting an user by ID /GET/:id", async () => {
        const idParam = 2;
        const response = await request(app).get(`/v1/explorers/:${idParam}`).send();
        const {id, name} = response._body;
        expect(id).toBe(1);
        expect(name).toBe("Carlo");
    });
});