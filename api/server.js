const express = require('express');		
const helmet = require("helmet");
const cors = require("cors");
require('dotenv').config();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require('../routes/users/users-router.js');

const server = express();

server.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

server.use(cors());
server.use(helmet());
server.use(express.json());



server.use("/api/auth", authRouter);
server.use('/users', usersRouter );

server.get('/', (req, res) => {
	res.status(200).json({ Test: "server endpoint from BW project"});
})

module.exports = server;