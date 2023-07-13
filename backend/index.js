const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get('', (request, response)=> response.send('Welcome home'))

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
