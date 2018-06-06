module.exports = io => {
  io.on('connection', socket => {
    console.log('Socket Connected')

    socket.on('disconnect', () => {
      console.log('User was disconnected')
    })
  })
}
