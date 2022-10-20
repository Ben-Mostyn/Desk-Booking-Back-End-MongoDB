const express = require("express");
require("dotenv");
const { connectToDb, getDb } = require("./db/db");

const app = express();

let db;
connectToDb((err) => {
  if (!err) {
    //Accesses port variable from .env file
    app.listen(3000, () => {
      console.log("app listening on Port");
    });
    db = getDb();
  }
});

app.get("/desk", (req, res) => {
  res.json({ msg: "App running" });
});
