const promotionService = require('../service/promotion.service');

export async function getPromotionInfoList(req, res) {
    console.log('getIndex');
    const info = await promotionService.selectAllPromotionInfoList();
    console.log('info: ' + JSON.stringify(info));
    res.json(info);
}

export async function createPromotionInfo(req, res) {
    console.log('createIndex body: ' + req.body);
    await promotionService.insertPromotionInfo(req.body);
    res.sendStatus(201);
}