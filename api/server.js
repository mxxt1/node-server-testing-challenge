const express = require('express');

//import router
const userRouter = require('../users/users-router.js');

//server
const server = express();


server.use('/users', userRouter);


module.exports = server;

