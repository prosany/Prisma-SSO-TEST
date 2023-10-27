const { Router } = require('express');

const route = Router();

route.get('/', (req, res, next) => {
  try {
    res.status(200);
    res.send({
      status: 'success',
      message: 'Welcome to SSO Service',
      copyright: `© ${new Date().getFullYear()} - SSO Service - All Rights Reserved`,
    });
  } catch (error) {
    next(error);
  }
});

route.get('/health', (req, res, next) => {
  try {
    res.status(200);
    res.send({
      status: 'success',
      message: 'SSO Service is healthy',
    });
  } catch (error) {
    next(error);
  }
});

route.get('/version', (req, res, next) => {
  try {
    res.status(200);
    res.send({
      status: 'success',
      message: 'SSO Service version',
      data: {
        version: '1.0.0',
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = route;
