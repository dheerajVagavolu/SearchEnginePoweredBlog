const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const post = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  body_embedding: {
    type: Array,
    required: true,
  },
  sol: {
    type: String,
    required: true,
  },
  advice: {
    type: String,
    required: false,
  },
  user: {
    type: ObjectId,
    ref: "User",
  },
  likes: {
    type: Number,
    required: true,
  },
});

mongoose.model("Post", post);
