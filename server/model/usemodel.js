const mongoose = require("mongoose");

var user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const userDB = mongoose.model("userDB", user);

module.exports = userDB;
