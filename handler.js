const serverlessExpress = require('@vendia/serverless-express')
const app = require('./app.js')

export default serverlessExpress({
  app,
})
