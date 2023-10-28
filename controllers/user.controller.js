const db = require('../utils/prisma');

exports.createUser = async (req, res) => {};

exports.getUser = async (_req, res, next) => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        avatar: true,
        role: true,
      },
    });
    res.status(200);
    res.send({
      status: 'success',
      message: 'All Users',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res) => {};

exports.updateUserById = async (req, res) => {};

exports.deleteUserById = async (req, res) => {};
