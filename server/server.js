const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({
  path: "./config.env"
});
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use((req,res,next) => {
  res.send('Express is running');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});