const express = require("express");

const connect = require("./config/db")

const user_data = require("./controllers/user.controllers.js")

const app = express();

app.use(express.json())

app.use("/posts", user_data);

require("dotenv").config();

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  try {
    await connect()
  } catch (err) {
    console.log(err);
  }
  console.log(`app is running on ${PORT}`);
});
