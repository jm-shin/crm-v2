const express = require('express');
const promotionController = require('../controller/promotion.controller.js');

const router = express.Router();

router.get('/', promotionController.getPromotionInfoList);
router.post('/', promotionController.createPromotionInfo);

module.exports = router;