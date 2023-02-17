import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import router from "./routes/coffeeshops.js";
import { NextFunction } from "express";

//express app
const app = express();
const PORT: any = process.env.PORT;
const ATLAS_URI: any = process.env.ATLAS_URI

//middleware
app.use(cors());
app.use(express.json());
app.use((req: express.Request, res: express.Response, next: NextFunction)=>{
  console.log(req.path, req.method)
  next();
})

//routes
app.use("/api/coffeeshops", router)

//connect to db;
mongoose.connect(ATLAS_URI)
.then(()=> {
//listen for requests
  app.listen(PORT, ()=> {
    console.log(`DB connected and Server is listening on http://localhost:${PORT}`);
  });  
})
.catch((error)=>{
    console.log(error)
})
export default app;
