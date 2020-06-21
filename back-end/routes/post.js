const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const User = mongoose.model("User");

const math = require("mathjs");
const tf = require("@tensorflow/tfjs-node");
const tf2 = require("@tensorflow-models/universal-sentence-encoder");

// Get All Posts
router.get("/posts", (req, res) => {
  Post.find()
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Get Top Posts
router.get("/top-posts", (req, res) => {
  Post.find()
    .sort({ likes: -1 })
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Get Fresh Posts
router.get("/fresh-posts", (req, res) => {
  Post.find()
    .sort({ _id: -1 })
    .limit(3)
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Get Similar Posts
router.post("/similar-posts", (req, res) => {
  Post.find()
    .then((posts) => {
      tf2.load().then((model) => {
        var a = [];
        const { query } = req.body;
        const sentences = [query];
        console.log(sentences);
        model
          .embed(sentences)
          .then(async (embeddings) => {
            const vec = await embeddings.array();
            a = vec[0];
            console.log(a);

            scores = [];
            for (var post in posts) {
              console.log(posts[post]["body"]);
              b = posts[post]["body_embedding"];

              var magnitudeA = Math.sqrt(math.dot(a, a));
              var magnitudeB = Math.sqrt(math.dot(b, b));
              if (magnitudeA && magnitudeB) {
                var score = math.dot(a, b) / (magnitudeA * magnitudeB);
                scores.push(score);
              } else {
                console.log("Error");
              }
            }

            res.json({ scores, posts });
          })
          .catch((err) => {
            console.log(err);
          });
      });

      // res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Add a new Post

// To Do:

// Add Number of posts of the user
router.post("/new-post", (req, res) => {
  const { user, body, sol, advice } = req.body;
  const likes = 0;
  if (!body || !sol) {
    res.json({ err: "Solution and Situation are Required!" });
  }

  User.findOne({ _id: user.id }).then((user) => {
    const body_embedding = [];
    tf2
      .load()
      .then((model) => {
        const sentences = [body];
        model.embed(sentences).then(async (embeddings) => {
          const vec = await embeddings.array();
          a = vec[0];
          const body_embedding = a;

          const post = new Post({
            body,
            body_embedding,
            sol,
            advice,
            user,
            likes,
          });

          post
            .save()
            .then(() => {
              res.json({ msg: "Post Created" });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// Likes for the post

// Authentication

module.exports = router;
