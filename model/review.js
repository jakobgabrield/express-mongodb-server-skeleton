var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Review model schema
var review = new Schema({
  reviewedUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
  reviewerUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Review", review);
