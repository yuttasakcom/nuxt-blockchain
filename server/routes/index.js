const router = require('express').Router()

const api = require('./api')

router.use('/api', api)

router.use((req, res, next) => {
  res.status(404).json({ success: false, message: '404 page not found' })
})

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({ sucess: false, error: err.message })
})

module.exports = router
