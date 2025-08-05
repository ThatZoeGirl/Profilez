/* ENV */
const dotenv = require('dotenv');
dotenv.configDotenv();

/* Postgre */
const profilesClient = require("../lib/profilesDB.js").profileDBPrismaClient;
const serversClient = require("../lib/serversDB.js").serverDBPrismaClient;

(async () => {
  console.log("\nProfiles:\n");
  const profiles = await profilesClient.profile.findMany();
  console.log(profiles);

  console.log("\nServers:\n");
  const servers = await serversClient.server.findMany();
  console.log(servers);
})()

/* discord */
const zcord = require('@zoe01/zcord');
const {Client} = require('discord.js');