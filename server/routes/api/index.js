const router = require('express').Router()

const BlockController = require('../../controllers/BlockController')

router.get('/blocks', BlockController.get)
router.post('/block', BlockController.addBlock)

module.exports = router
