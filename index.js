const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./config/mongoose");
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const weatherRoutes = require("./api/routes/weatherRoutes");
app.use("/weather", weatherRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
