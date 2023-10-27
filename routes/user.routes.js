const { Router } = require('express');
const {
  createUser,
  getUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../controllers/user.controller');

const route = Router();

route.post('/create-user', createUser);
route.get('/get-users', getUser);
route.get('/get-user/:id', getUserById);
route.patch('/update-user/:id', updateUserById);
route.delete('/delete-user/:id', deleteUserById);

module.exports = route;
