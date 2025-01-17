const path = require('path')

const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(`./.env`) })

const env = process.env

const dbOptions = {
  uri: env.CID_DB_CONNECTIONSTRING,
  options: {
    dbName: env.CID_DB_NAME,
    auth: {
      user: env.CID_DATABASE_USER,
      password: env.CID_DATABASE_PASSWORD,
    },
  },
}

// All configurations will extend these options
// ============================================
const all = {
  env: env.NODE_ENV,
  // Server port
  port: env.PORT || 3000,
  // Server IP
  ip: env.IP || '0.0.0.0',

  db: dbOptions,

  lotus: {
    url: env.CID_LOTUS_RPCURL,
    token: env.CID_LOTUS_JWT_TOKEN,
  },
  logging: {
    timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
    messageKey: 'message',
    // level: 'debug',
    // prettyPrint: true,
    // prettyPrint: {
    //   translateTime: 'yyyy-mm-dd HH:MM:ss',
    // },
  },
}

// Export the config object based on the NODE_ENV
// ==============================================
/* eslint-disable */
const mod = require(`./${process.env.NODE_ENV}`) || {}
/* eslint-enable */

const result = { ...all, ...mod }

module.exports = result
