const { PrismaClient } = require("../prisma-servers/generated/prisma");
const { withAccelerate } = require("@prisma/extension-accelerate");

const getPrisma = () => new PrismaClient().$extends(withAccelerate());

global.serverDBPrismaClient = global.serverDBPrismaClient || getPrisma();

const serverDBPrismaClient = global.serverDBPrismaClient;

module.exports = { serverDBPrismaClient };