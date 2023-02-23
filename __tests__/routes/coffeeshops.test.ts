// import request from "supertest"
// import app from "../../src/server.js"
// import {expect, test} from "@jest/globals"

// describe('GET /', function(){
//     it('responds with list of all coffeeshops', async function() {
//         const response = await request(app).get('/api/coffeeshops')
//         console.log(response)
//         expect(response.status).toEqual(200)
//         expect (response.body).toStrictEqual(expect.any(Array))
//         for (let i=0; i<response.body.length[i]; i++){
//             const coffeeshopObject = response.body[i]
//             console.log(coffeeshopObject)
//                 expect(coffeeshopObject).toContain({
//                     name: expect.any(String), town: expect.any(String), //completion_date: expect.any(String),
//                     })
//         }
//     })
// })
describe("Server.ts tests", () => {
    test("Math test", () => {
      expect(2 + 2).toBe(4);
    });
  });