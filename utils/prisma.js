const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

// const db = async () => {
//   const connected = await prisma.$connect();
//   return connected;
// };

module.exports = db;
