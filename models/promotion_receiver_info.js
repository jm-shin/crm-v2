const Sequelize = require('sequelize');


module.exports = class PromotionReceiverInfo extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            receiver_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING(128),
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                defaultValue: null,
            },
            user_idx: {
                type: Sequelize.BIGINT(),
                allowNull: false,
            },
            collect_type: {
                type: Sequelize.INTEGER().UNSIGNED,
                defaultValue: 0,
                allowNull: false,
            },
            group_no: {
                type: Sequelize.BIGINT(),
                defaultValue: 0,
                allowNull: false,
            },
            condition_text: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            condition_json: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            valid_state: {
                type: Sequelize.INTEGER().UNSIGNED,
                defaultValue: 1,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'PromotionReceiverInfo',
            tableName: 'promotion_receiver_info',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
    static associate(db){
        db.PromotionReceiverInfo.hasOne(db.PromotionInfo,{foreignKey: 'receiver_id', sourceKey: 'receiver_id'})
    }
}
