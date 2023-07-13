const express = require("express");
const cors = require("cors");
const app = express();
const BlogRouter = require("./controllers/blog");

app.use(cors());
app.use(express.json());
require("./db");

app.get("", (request, response) => response.send("Welcome home"));
app.use("/api/blogs", BlogRouter)

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
