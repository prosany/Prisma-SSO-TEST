const express = require('express');
const cors = require('cors');
const { app, server } = require('./utils/server');
const configs = require('./configs');

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/', require('./routes/root.routes'));
app.use('/v1', require('./routes/user.routes'));

// listen
server.listen(configs.port, () => {
  console.log(`🔥 Running On -> http://localhost:${configs.port}`);
});
