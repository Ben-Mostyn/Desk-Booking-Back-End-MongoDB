const mongoose = require("mongoose");
// const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;

//Schema
const deskSchema = new Schema({
  UserId: { type: String, required: true },
  DeskId: { type: Number, required: true },
  Date: { type: "string", format: "date", required: true },
});

module.exports = mongoose.model("Desk", deskSchema);
