const express = require('express');
const cors = require('cors');
const { app, server } = require('./utils/server');
const configs = require('./configs');
const { errorResponse } = require('./utils/response');

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/', require('./routes/root.routes'));
app.use('/v1', require('./routes/user.routes'));

// global error handler
app.use((_req, res) => {
  return errorResponse(res, {
    status: 404,
    message: 'Requested URL is not found',
  });
});

app.use((err, _req, res) => {
  return errorResponse(res, {
    status: 500,
    message: err.message || 'Internal server error!',
  });
});

// listen
server.listen(configs.port, () => {
  console.log(`🔥 Running On -> http://localhost:${configs.port}`);
});
