const express = require("express");
const router = express.Router();

var Category = require("../model/category");

//category API:
router.post("/", (req, res) => {
  var category = new Category(req.body);
  category.save((err, newCategory) => {
    if (err) {
      res.status(500).send({ error: "Could not post category" });
    } else {
      res.status(200).send(newCategory);
    }
  });
});

router.put("/", (req, res) => {
  Category.updateOne({ _id: req.body._id }, req.body, (err, category) => {
    if (err) {
      res.status(500).send("Could not update record");
    } else {
      res.status(200).send("Category data updated");
    }
  });
});

router.get("/", (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      res.status(500).send("Could not get categories");
    } else {
      res.status(200).send(categories);
    }
  });
});

module.exports = router;
