const express = require("express");
const mongoose = require("mongoose");
const math = require("mathjs");

// var db;

// var Cloudant = require("@cloudant/cloudant");
// var cloudant = new Cloudant({
//   url:
//     "https://ebf81ffa-f300-43f4-a6d7-140b8505d090-bluemix.cloudantnosqldb.appdomain.cloud",
//   plugins: {
//     iamauth: { iamApiKey: "nx2eB5eSVybnvafAR1gjcTKevHeMKIugjZu3Injva22w" },
//   },
// });

// var dbCredentials = {
//   dbName: "posts",
// };

// To Create a db
// cloudant.db.create(dbCredentials.dbName, function (err, res) {
//   if (err) {
//     console.log(
//       "Could not create new db: " +
//         dbCredentials.dbName +
//         ", it might already exist."
//     );
//   }
// });

// To use a db
// db = cloudant.use(dbCredentials.dbName);

// db.insert({
//   username: "test",
//   email: "test",
//   password: "test",
//   postsIDs: [],
//   caption: "test",
// });

// const { MONGOURI } = require("./keys");

const app = express();
const PORT = 5000;

// Connect to MongoDB
// mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

// mongoose.connection.on("error", (error) => {
//   console.log("Error: ", +error);
// });

// Models import
// require("./models/post");
// require("./models/user");

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
