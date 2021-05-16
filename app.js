const express = require("express");
const app = express();
const mongooose = require("mongoose");
const { MONGOURI } = require("./config/key");

const PORT = process.env.PORT || 5000;

mongooose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

require("./models/user");
require("./models/transactions");

app.use(express.json());
app.use(require("./routes/auth"));

mongooose.connection.on("connected", () => {
  console.log("connnected to mongo db");
});

mongooose.connection.on("error", (err) => {
  console.log("error connecting", err);
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
