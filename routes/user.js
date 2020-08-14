const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/user");

//user API:
router.post("/", (req, res) => {
  var user = new User(req.body);
  //user.userType = req.body.userType;
  user.save((err, newUser) => {
    if (err) {
      res.status(500).send({ error: "Could not post user" });
    } else {
      res.status(200).send(newUser);
    }
  });
});

router.put("/", (req, res) => {
  //User.updateOne({ _id: req.body._id }, req.body, (err, user) => {
  User.updateOne({ _id: req.body._id }, { $set: req.body }, (err, user) => {
    if (err) {
      res.status(500).send("Could not update record");
    } else {
      res.status(200).send("User data updated");
    }
  });
});

router.get("/", (req, res) => {
  User.find({})
    .populate("calandar")
    .populate("categories")
    .populate("following")
    .exec((err, users) => {
      if (err) {
        res.status(500).send({ error: "Could not get users" });
      } else {
        res.status(200).send(users);
      }
    });
});

// router.get("/", (req, res) => {
//   User.find({})
//     .populate(
//       { path: "following", model: "User" }
//       //{ path: "categories", model: "Category" }
//     )
//     .populate({ path: "categories", model: "Category" })
//     .exec((err, users) => {
//       if (err) {
//         res.status(500).send({ error: "Could not get users" });
//       } else {
//         res.status(200).send(users);
//       }
//     });
// });

// Post.find({})
//             .populate('postedBy')
//             .populate('comments.postedBy')
//             .exec(function(error, posts) {
//                 console.log(JSON.stringify(posts, null, "\t"))
//             })

module.exports = router;
