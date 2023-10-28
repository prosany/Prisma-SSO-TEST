const db = require('../utils/prisma');

exports.createUser = async (req, res) => {
  try {
    const payload = req.body;
    const response = await db.user.create({
      data: payload,
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        role: true,
      },
    });
    res.status(201);
    res.send({
      status: response?.id ? 'success' : 'failed',
      message: response?.id
        ? 'User created successfully'
        : 'Failed to create user.',
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (_req, res, next) => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        role: true,
      },
      orderBy: {
        createdAt: 'desc',
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

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        role: true,
      },
    });
    res.status(200);
    res.send({
      status: user?.id ? 'success' : 'failed',
      message: user?.id ? 'User fetch successfully' : 'Failed to fetch user.',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUserById = async (req, res) => {};

exports.deleteUserById = async (req, res) => {};
