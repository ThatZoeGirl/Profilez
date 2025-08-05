const { PrismaClient } = require("../prisma-profiles/generated/prisma");
const { withAccelerate } = require("@prisma/extension-accelerate");

const getPrisma = () => new PrismaClient().$extends(withAccelerate());

global.profileDBPrismaClient = global.profileDBPrismaClient || getPrisma();

const profileDBPrismaClient = global.profileDBPrismaClient;

module.exports = { profileDBPrismaClient };