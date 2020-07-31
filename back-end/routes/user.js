const express = require("express");
const router = express.Router();

var db;

var Cloudant = require("@cloudant/cloudant");
var cloudant = new Cloudant({
  url:
    "https://ebf81ffa-f300-43f4-a6d7-140b8505d090-bluemix.cloudantnosqldb.appdomain.cloud",
  plugins: {
    iamauth: { iamApiKey: "nx2eB5eSVybnvafAR1gjcTKevHeMKIugjZu3Injva22w" },
  },
});

var dbCredentials = {
  dbName: "users",
};

db = cloudant.use(dbCredentials.dbName);
// const mongoose = require("mongoose");
// const User = mongoose.model("User");

router.get("/users", (req, res) => {
  db.list({ include_docs: true }, function (err, data) {
    res.json(data);
    console.log(err, data);
  });
});

// To update to a new value
// var user = {
//   'firstname' : 'my',
//   'secondname' : 'name',
//   '_id': <id from prev object>,
//   '_rev': <rev from prev object>
// };

// db.insert(user, function(err, body) {});

router.post("/new-user", (req, res) => {
  const { username, email, password, caption } = req.body;

  if (!email || !password || !username) {
    res.json({ err: "Email, Password and Username are required!" });
  }

  if (!caption) {
    caption = "";
  }

  _data = {
    username: username,
    email: email,
    password: password,
    caption: caption,
    postIDs: [],
  };

  var query = {
    selector: {
      username: username,
    },
  };

  // db.insert(data);

  db.find(query, function (err, data) {
    // 'data' contains results
    // res.json(data["docs"]);
    if (data["docs"].length > 0) {
      res.json({ msg: "UserName Already Exists" });
    } else {
      db.insert(_data, (err) => {
        if (err) {
          console.log(err);
        } else {
          res.json({ msg: "User Created" });
        }
      });
    }
  });
});

module.exports = router;
