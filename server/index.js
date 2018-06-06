const http = require('http')
const socketIO = require('socket.io')
const P2P = require('socket.io-p2p-server').Server
const { Nuxt, Builder } = require('nuxt')
const app = require('./app')

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Create server
  const server = http.createServer(app)
  const io = socketIO(server)
  io.use(P2P)

  require('./sockets')(io)

  // Listen the server
  server.listen(app.get('port'))
  console.log(`Server running at port:${app.get('port')}`) // eslint-disable-line no-console
}
start()
