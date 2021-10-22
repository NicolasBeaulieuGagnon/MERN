const express = require("express");
const morgan = require("morgan");
const path = require("path");

const { getAllMessages, postMessage } = require("./handlers/messageHandlers");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(express.json());

app.get("/posts", getAllMessages);

app.post("/post/message", postMessage);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("listening on port " + PORT));
