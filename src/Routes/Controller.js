// fun
const User = require("../models/UserSchema");

exports.CreateUser = async () => {
  const newUser = await User.create(req.body);
};
