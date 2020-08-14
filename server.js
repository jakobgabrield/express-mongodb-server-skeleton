var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const user = require("./routes/user");
const calandar = require("./routes/calandar");
const category = require("./routes/category");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", user);
app.use("/calandar", calandar);
app.use("/category", category);

const mongoUri = "";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB");
});

app.get("/", (req, res) => {
  res.send("Lessons App API");
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening on port 3000...");
});
