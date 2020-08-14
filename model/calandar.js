var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Calandar model schema
var calandar = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  calandar: Schema.Types.Mixed
});

module.exports = mongoose.model("Calandar", calandar);
