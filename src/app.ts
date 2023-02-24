import app from "./server.js"
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT

//express app

app.listen(PORT, () => {
  console.log(
    `DB connected and Server is really listening on http://localhost:${PORT}`
  );
});



