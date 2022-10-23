const express = require("express");
const { db } = require("../models/DeskSchema");
const Desk = require("../models/DeskSchema");

const router = express.Router();

//!Get all Desk
router.get("/", (req, res) => {
  let desks = [];
  db.collection("desks")

    .find()
    .sort({ DeskId: 1 })
    .forEach((desk) => desks.push(desk))
    .then(() => {
      res.status(200).json(desks);
    })
    .catch((err) => {
      res.status(500).json({ error: "Not a valid desk" });
    });
});

//!Getting One Desk
router.get("/:date", (req, res) => {
  db.collection("desks")
    .findOne({ Date: req.params.date })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: "Not valid user" });
    });
});

//!Adding a desk
router.post("/", async (req, res) => {
  const { UserId, DeskId, Date } = req.body;
  try {
    const booking = await Desk.create({ UserId, DeskId, Date });
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//!Deleting a Desk

module.exports = router;
