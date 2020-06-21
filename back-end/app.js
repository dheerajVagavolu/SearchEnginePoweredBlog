const express = require("express");
const mongoose = require("mongoose");
const math = require("mathjs");

const { MONGOURI } = require("./keys");

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log("Error: ", +error);
});

// Models import
require("./models/post");
require("./models/user");

app.use(express.json());

// Router import
const routePost = require("./routes/post");
const routeUser = require("./routes/user");

// MiddleWare
app.use("/", routePost);
app.use("/", routeUser);

// app.use("/", newPost);

app.listen(PORT, () => {
  console.log("Server is started at " + PORT);
});
