var express = require("express");
var app = express();

const user = require("./routes/user");
const calandar = require("./routes/calandar");
const category = require("./routes/category");

app.use(express.json());
app.use("api/user", user);
app.use("api/calandar", calandar);
app.use("api/category", category);

app.get("/", (req, res) => {
  res.send("Main domain");
});

app.get("/api", (req, res) => {
  res.send("API default endpoint");
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening on port 3000...");
});
