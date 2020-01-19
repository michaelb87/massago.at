const express = require('express')
cors = require('cors')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser');

const app = express()

const port = 3501
const dotenv = require('dotenv')
dotenv.config() // load .env


dotenv.config({
  path: require('find-config')('.env.server'),
});


const { format, loggers, transports } = require('winston')
loggers.add('main', {
  format: format.json(),
  transports: [
    new transports.Console(),
    new transports.File({ filename: process.env.LOGFILE })
  ]
})

app.options('*', cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)


  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
