import request from "supertest"
import {app, server} from "../src/server"
import mongoose from "mongoose"

describe("Test server.ts", () => {
  afterAll(async () => {
    mongoose.connection.close()
    .then(()=>{
      server.close()
    })
    })

    test("Catch-all route", async () => {
        const res = await request(app).get("/api/coffeeshops");
        expect(res.status).toEqual(200);
        res.body.forEach((cafe:object)=>{
          expect(cafe).toHaveProperty("name");
          expect(cafe).toHaveProperty("town");
        })
    })
})

describe("Server.ts tests", () => {
    test("Math test", () => {
      expect(2 + 2).toBe(4);
    });
  });