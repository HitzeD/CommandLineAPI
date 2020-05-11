const express = require('express');
const cors = require('cors');
const server = express();

server.get('/', (req, res) => res.status(200).json({ title: 'Server Running'}));
