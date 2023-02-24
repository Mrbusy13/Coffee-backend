import supertest from "supertest"; 
import app from "../src/server";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const ATLAS_URI = process.env.ATLAS_URI
const request = supertest(app)

beforeAll(async()=>{
  if(ATLAS_URI)
    await mongoose.connect(ATLAS_URI)
});

afterAll(async ()=>{
  mongoose.connection.close()
})

it("Get All Endpoint", async () => {
  const response = await request.get("/api/coffeeshops")
  expect(response.status).toBe(200)

})
it("Should add a new coffee shop", async()=>{
  const res = await request.post("/api/coffeeshops").send({
    name: "Test Cafe",
    town: "Test Town"
  });
})
// describe("Test server.ts", () => {
//   afterAll(async () => {
//     server.close();
//   });

//   test("Catch-all route", (done) => {
//     request(app)
//       .get("/api/coffeeshops")
//       .end((err, res) => {
//         expect(res.status).toEqual(200);
//         res.body.forEach((cafe: object) => {
//           expect(cafe).toHaveProperty("name");
//           expect(cafe).toHaveProperty("town");
//         });
//         done();
//       });
//   });
// });

// describe("Server.ts tests", () => {
//   test("Math test", () => {
//     expect(2 + 2).toBe(4);
//   });
// });
