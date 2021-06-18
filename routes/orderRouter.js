const router = require('express').Router()

const orderCtrl = require('../controllers/orderCtrl')

router.post('/placeorder', orderCtrl.placeorder)
router.get('/orders', orderCtrl.getOrder)

module.exports = router