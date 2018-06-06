const router = require('express').Router()

const BlockController = require('../../controllers/BlockController')

router.get('/block', BlockController.get)

module.exports = router
