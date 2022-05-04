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

    test("4) Getting a 404 status code /POST", async () => {        
        const response = await request(app).post('/v1/explorers').send()
        expect(response.statusCode).toBe(404);
    });


    test("5) Verifying if the content-type response message is an application/json", async () => {
        const response = await request(app).post('/v1/explorers').send()
        expect(response.get('Content-Type')).toMatch(/application\/json/);
    });


    test("6) Checking if the explorer was saved", async () => {
        const explorer = { id: Math.round(Math.random() * (5-1))+1, name: "Miko" }
        const response = await request(app).post('/v1/explorers').send(explorer)
        expect(response.body.response).toBe("Explorer created");
    })

    test("7) Checking if the endpoint /PUT/:id update a explorer", async ()=> {
        const id = 2
        const response = await request(app).put(`/v1/explorers/:${id}`).send()
        expect(response.ok).not.toBeFalsy();
    });

    test("8) Checking if the param /PUT/:id is undefined", async () => {
        let id;
        const response = await request(app).put(`/v1/explorers/${id}`).send()
        expect(response.body.message).toMatch(/an error has ocurred/);
    });
});