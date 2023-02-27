import supertest from "supertest";
import app from "../src/server";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ATLAS_URI = process.env.ATLAS_URI;
const request = supertest(app);

beforeAll(async () => {
  if (ATLAS_URI) await mongoose.connect(ATLAS_URI);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("Get All Endpoint", () => {
  test("should return an array of objects", async () => {
    const response = await request.get("/api/coffeeshops");
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("town");
  });
});

describe("Get a specific coffeeshop based on id", ()=> {
  test("Should return a single coffeeshop", async ()=> {
    const response = await request.get("/api/coffeeshops/63ef7e01dc025b4e5b24a987");
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Tampering");
    expect(response.body.town).toBe("Sheffield");
  })
})

describe("POST new coffeeshop endpoint", () => {
  test("Should add a new coffee shop to the database", async () => {
    const newCoffeeshop = await request.post("/api/coffeeshops").send({
      name: "Test Cafe",
      town: "Test Town",
    });
    expect(newCoffeeshop.body.name).toBe("Test Cafe");
    expect(newCoffeeshop.body.town).toBe("Test Town");
    expect(newCoffeeshop.status).toBe(200);
  });
});

describe("DELETE a coffeeshop", ()=> {
  test("Should delete a coffeeshop from the database", async ()=> {
    const deletedCoffeeshop = await request.delete("/api/coffeeshops/Test%20Cafe");
    expect(deletedCoffeeshop.status).toBe(200);
    expect(deletedCoffeeshop.body.deletedCount).toBeGreaterThan(0);
  })
})
