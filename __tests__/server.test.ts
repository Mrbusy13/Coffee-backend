import request from "supertest";
import { app, server } from "../src/server";
import mongoose from "mongoose";

describe("Test server.ts", () => {
  afterAll(async () => {
    server.close();
  });

  test("Catch-all route", (done) => {
    request(app)
      .get("/api/coffeeshops")
      .end((err, res) => {
        expect(res.status).toEqual(200);
        res.body.forEach((cafe: object) => {
          expect(cafe).toHaveProperty("name");
          expect(cafe).toHaveProperty("town");
        });
        done();
      });
  });
});

describe("Server.ts tests", () => {
  test("Math test", () => {
    expect(2 + 2).toBe(4);
  });
});
