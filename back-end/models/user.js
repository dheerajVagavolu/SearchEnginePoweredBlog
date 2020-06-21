const mongoose = require("mongoose");

const user = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  posts: {
    type: Number,
    required: true,
  },
});

mongoose.model("User", user);
