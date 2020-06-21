const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.get("/users", (req, res) => {
  User.find()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/new-user", (req, res) => {
  const { username, email, password, caption } = req.body;
  const posts = 0;
  if (!email || !password || !username) {
    res.json({ err: "Email, Password and Username are required!" });
  }

  if (!caption) {
    caption = "";
  }

  User.find({ username: username }).then((users) => {
    if (users.length) {
      res.json({ msg: "UserName already Exists!" });
    } else {
      const user = new User({
        username,
        email,
        password,
        caption,
        posts,
      });

      user
        .save()
        .then(() => {
          res.json({ msg: "User Created" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

module.exports = router;
