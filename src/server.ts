import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/coffeeshops.js";
import dotenv from "dotenv";

dotenv.config();

//express app
const app = express();
const ATLAS_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(
    `DB connected and Server is really listening on http://localhost:${PORT}`
  );
});

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/coffeeshops", router);

//connect to db;
// await replaces the need for .then and .catch because within ES6 await is performing in the same way.
if (ATLAS_URI) {
  try {
    mongoose.connect(ATLAS_URI).then(() => {
      return server
    });
  } catch (error) {
    console.log(error);
  }
}

export {app , server};
