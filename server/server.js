const express = require("express");
const morgan = require("morgan");

const { getAllMessages, postMessage } = require("./handlers/messageHandlers");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(express.json());

app.get("/posts", getAllMessages);

app.post("/post/message", postMessage);

app.listen(PORT, () => console.log("listening on port " + PORT));
