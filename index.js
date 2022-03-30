const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./config/mongoose");
app.use(express.json());
var mongooseMorgan = require("mongoose-morgan");

const port = process.env.PORT;
app.use(
  mongooseMorgan(
    {
      connectionString: process.env.MONGO_URI,
    },
    {},
    "short"
  )
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const weatherRoutes = require("./api/routes/weatherRoutes");
const constantConfig = require("./config/constantConfig");
app.use("/weather", weatherRoutes);

//default route
app.get("*", (req, res) => {
  res.status(constantConfig.ERROR_CODE).json({
    status: constantConfig.NOT_FOUND,
    message: "Page not found",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
