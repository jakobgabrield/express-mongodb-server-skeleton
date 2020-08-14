var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Appointment model schema
var appointment = new Schema({
  listerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: Date,
  time: { type: String, required: true },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  fullyBooked: { type: Boolean, default: false, required: true }
});

module.exports = mongoose.model("Appointment", appointment);
