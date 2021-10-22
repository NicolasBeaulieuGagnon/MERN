const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
const assert = require("assert");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllMessages = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  console.log("connected");

  try {
    const db = client.db("mern-app");

    const result = await db.collection("messages").find().toArray();

    res
      .status(200)
      .json({ status: 200, data: result, message: "all stored messages" });
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .json({ status: 404, message: "something went wrong here my friend." });
  } finally {
    client.close();
    console.log("disconnected");
  }
};

const postMessage = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  console.log("connected");
  const { message } = req.body;

  try {
    const _id = uuidv4();
    const db = client.db("mern-app");
    await db.collection("messages").insertOne({ message, _id });

    res.status(200).json({ status: 200, message: "added message" });
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .json({ status: 404, message: "something went wrong here my friend." });
  } finally {
    client.close();
    console.log("disconnected");
  }
};

module.exports = {
  getAllMessages,
  postMessage,
};
