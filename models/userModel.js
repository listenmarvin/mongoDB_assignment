const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Please enter a  Name"],
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestams: true,
  }
);

const user = mongoose.model("user", userSchema);

module.exports = user;
