const express = require("express");
const cors = require("cors");
const wordsController = require("./controller/words-controller");

const server = express();
server.use(cors());
server.use(express.json());

server.use("/", wordsController);

server.listen(4000, () => console.log("Listening on http://localhost:4000"));
