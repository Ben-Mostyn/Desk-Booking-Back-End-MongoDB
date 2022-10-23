const mongoose = require("mongoose");
//Schema
const userSchema = mongoose.Schema({
  User: String,
});

module.exports = mongoose.model("User", userSchema);
