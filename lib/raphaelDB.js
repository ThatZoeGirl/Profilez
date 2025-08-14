const { PrismaClient } = require("../prisma/generated/prisma");
const { withAccelerate } = require("@prisma/extension-accelerate");

const getPrisma = () => new PrismaClient().$extends(withAccelerate());

global.rapaelDBPrismaClient = global.rapaelDBPrismaClient || getPrisma();

const rapaelDBPrismaClient = global.rapaelDBPrismaClient;

module.exports = { rapaelDBPrismaClient };