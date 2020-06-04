const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

server.use(require('body-parser').text());

const commandsRouter = require('./commands/commandsRouter.js');

const server = express();

server.use(helmet()); // sets some HTTP headers
server.use(cors());
server.use(express.json());

server.use('/commands', commandsRouter);

server.get('/', (req, res) => res.status(200).json('Server Running'));

module.exports = server;