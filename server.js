import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import router from "./routes/coffeeshops.js";

//express app
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
  console.log(req.path, req.method)
  next();
})

//routes
app.use("/api/coffeeshops", router)

//connect to db;
mongoose.connect(process.env.ATLAS_URI)
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
