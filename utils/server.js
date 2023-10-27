const express = require('express');
const { createServer } = require('http');

// app initialization
const app = express();

// create server
const server = createServer(app);

module.exports = { app, server };
