const mongoose = require("mongoose");
//Schema
const userSchema = mongoose.Schema({
  user: String,
});

module.exports = mongoose.model("User", userSchema);
