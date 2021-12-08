const { PromotionInfo } = require('../../models/index.js');

export async function insertPromotionInfo(info) {
    const {title, description, user_idx, receiver_id, condition_json, progress_state, valid_state} = info;
    try {
        await PromotionInfo.create({
            title: title,
            description: description,
            user_idx : user_idx,
            receiver_id: receiver_id,
            condition_json: condition_json,
            progress_state: progress_state,
            valid_state: valid_state,
        });
        console.log('create promotion row.');
    }catch (err) {
        console.error(err);
    }
}

export async function selectAllPromotionInfoList() {
    try {
        return await PromotionInfo.findAll({});
    } catch (err) {
        console.error(err);
    }
}