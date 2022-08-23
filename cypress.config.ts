import { defineConfig } from 'cypress'

require('dotenv').config()

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 100000,
  responseTimeout: 100000,
  env: {
    host: 'http://localhost:8080',

    //Used in loginCustom
    loginUser: 'TestMike',
    loginPass: 'TestPass',

    //Used in loginAuth0
    auth0_username: "testmike1@datavisyn.com",
    auth0_password: "QW123er!",
    auth0_domain: "dev-gel96bj6.us.auth0.com",
    auth0_audience: "https://dev-gel96bj6.us.auth0.com/api/v2/",
    auth0_scope: "openid profile email",
    auth0_client_id: "fTq8V36vnFuE3UPL3OFXdCKNWyAQAuku",
    auth0_client_secret: "y35ORZQ0xq1SPpMdsZlQqDM0vGzY04DqPxJp5p54bL1IXvGS6xZ77StBb08LyKWh",

    // auth0_username: process.env.AUTH0_USERNAME,
    // auth0_password: process.env.AUTH0_PASSWORD,
    // auth0_domain: process.env.AUTH0_DOMAIN,
    // auth0_audience: process.env.AUTH0_AUDIENCE,
    // auth0_scope: process.env.AUTH0_SCOPE,
    // auth0_client_id: process.env.AUTH0_CLIENTID,
    // auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
