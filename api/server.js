const express = require('express');		
const helmet = require("helmet");
const cors = require("cors");
// require('dotenv').config();
const server = express();
const authRouter = require("../auth/auth-router.js");
const usersRouter = require('../routes/users/users-router.js');



server.use(helmet());
server.use(express.json());
server.use(cors());


server.use("/api/auth", authRouter);
server.use('/users', usersRouter );

server.get('/', (req, res) => {
	res.status(200).json({ Test: "server endpoint from BW project"});
})

module.exports = server;