const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

server.use(require('body-parser').text());

const commandsRouter = require('./commands/commandsRouter.js');
const platformRouter = require('./platforms/platformRouter.js');


server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/commands', commandsRouter);
server.use('/platforms', platformRouter);

server.get('/', (req, res) => res.status(200).json('Server Running'));

module.exports = server;