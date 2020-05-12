const express = require('express');
const helmet = require('helmet');

const commandsRouter = require('./commands/commandsRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/commands', commandsRouter);

server.get('/', (req, res) => res.status(200).json('Server Running'));

module.exports = server;