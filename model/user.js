var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//var ObjectId = mongoose.Schema.Types.ObjectId;
var Category = require("./category");

//User model schema
var user = new Schema({
  //userId: Number,
  userType: { type: String, default: "user", required: true }, //"user" or "lister" or "admin"
  credentials: {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
  },
  profile: {
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    location: {
      longitude: { type: Number, default: 0 },
      latitude: { type: Number, default: 0 }
    },
    image: { type: String, default: "" },
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] //References to users who they follow
  },
  calandar: { type: mongoose.Schema.Types.ObjectId, ref: "Calandar" }
});

module.exports = mongoose.model("User", user);
