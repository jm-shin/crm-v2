const Sequelize = require('sequelize');
const User = require('./user');
const PromotionInfo = require('./promotion_info');
const PromotionReceiverInfo = require('./promotion_receiver_info');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize; //db 객체 재사용을 위해 설정

db.User = User;
db.PromotionInfo = PromotionInfo;
db.PromotionReceiverInfo = PromotionReceiverInfo;

User.init(sequelize);
PromotionInfo.init(sequelize);
PromotionReceiverInfo.init(sequelize);

User.associate(db);
PromotionInfo.associate(db);
PromotionReceiverInfo.associate(db);

export default db;