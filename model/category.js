var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//User model schema
var category = new Schema({
  name: { type: String, required: true },
  //subCategories: [Categories]
  iconType: { type: String, required: true },
  iconName: { type: String, required: true }
});

module.exports = mongoose.model("Category", category);
