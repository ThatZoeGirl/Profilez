/* ENV */
const dotenv = require('dotenv');
dotenv.configDotenv();

/* node */
const path = require('node:path');

/* Postgre */
const rapaelClient = require("../lib/raphaelDB.js").rapaelDBPrismaClient;

/* Commented cuz i don't need it rn
(async () => {
  const rapael = await rapaelClient.profile.findMany();
  console.log("rapael connected");
})();
*/

/* discord */
const {scopePackages, zClient} = require('@zoe01/zcord');

packages = scopePackages(path.join(__dirname, `../${process.env.PACKAGEPATH}`));

const client = new zClient(packages);
client.initEvents();
client.login(process.env.TOKEN);