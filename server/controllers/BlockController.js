const io = require('socket.io-client')
const P2P = require('socket.io-p2p')
const socket = io('http://localhost:3000')
// const p2p = new P2P(socket)

const Blockchain = require('../services/Blockchain')

const bc = new Blockchain()

exports.get = (req, res, next) => {
  res.json(bc.chain)
}

exports.addBlock = (req, res, next) => {
  const block = bc.addBlock(req.body.data)
  console.log(`New block added: ${block.toString()}`)

  res.redirect('/api/blocks')
}
