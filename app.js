import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

export default app;
