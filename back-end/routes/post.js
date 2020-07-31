const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const math = require("mathjs");
const tf = require("@tensorflow/tfjs-node");
const tf2 = require("@tensorflow-models/universal-sentence-encoder");

var db2;

var Cloudant = require("@cloudant/cloudant");
var cloudant = new Cloudant({
  url:
    "https://ebf81ffa-f300-43f4-a6d7-140b8505d090-bluemix.cloudantnosqldb.appdomain.cloud",
  plugins: {
    iamauth: { iamApiKey: "nx2eB5eSVybnvafAR1gjcTKevHeMKIugjZu3Injva22w" },
  },
});

var dbCredentials = {
  dbName: "posts",
};

db2 = cloudant.use(dbCredentials.dbName);

// Get All Posts
router.get("/posts", (req, res) => {
  db2.list({ include_docs: true }, function (err, data) {
    res.json(data);
    console.log(err, data);
  });
});

// Get Similar Posts
router.post("/similar-posts", (req, res) => {
  db2.list({ include_docs: true }, function (err, data) {
    // res.json(data);
    console.log(err, data);

    tf2.load().then((model) => {
      scores = [];
      const { query } = req.body;
      const sentences = [query];
      model.embed(sentences).then(async (embeddings) => {
        const vec = await embeddings.array();
        a = vec[0];
        for (var row in data["rows"]) {
          b = data["rows"][row]["doc"]["body_embedding"];
          var magnitudeA = Math.sqrt(math.dot(a, a));
          var magnitudeB = Math.sqrt(math.dot(b, b));
          if (magnitudeA && magnitudeB) {
            var score = math.dot(a, b) / (magnitudeA * magnitudeB);
            scores.push(score);
            console.log(score);
          } else {
            console.log("Error");
          }
        }

        var list = [];
        for (var j = 0; j < scores.length; j++) {
          delete data["rows"][j]["doc"]["body_embedding"];
          delete data["rows"][j]["doc"]["_id"];
          delete data["rows"][j]["doc"]["_rev"];
          list.push({ score: scores[j], dat: data["rows"][j] });
        }

        list.sort(function (a, b) {
          return a.score > b.score ? -1 : a.score == b.score ? 0 : 1;
          //Sort could be modified to, for example, sort on the age
          // if the name is the same.
        });
        let data_new = {};
        for (var k = 0; k < list.length; k++) {
          scores[k] = list[k].score;
          data_new[k] = list[k].dat["doc"];
        }

        res.json({ scores, data_new });
      });
    });
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

  if (user == "") {
    _user = "@anonymous";
  } else {
    _user = user;
  }
  var today = new Date();

  cur_time = today;

  tf2.load().then((model) => {
    const sentences = [body];
    model
      .embed(sentences)
      .then(async (embeddings) => {
        const vec = await embeddings.array();
        a = vec[0];

        _data = {
          username: _user,
          body: body,
          sol: sol,
          advice: advice,
          time: cur_time,
          body_embedding: a,
        };

        db2.insert(_data, (err) => {
          if (err) {
            console.log(err);
          } else {
            res.json({ msg: "Post Added" });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({ msg: "Error! Post not created" });
      });
  });
});

// Likes for the post

// Authentication

// Link everything

module.exports = router;
