const Sequelize = require('sequelize');

module.exports = class PromotionInfo extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            promotion_id: {
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
                allowNull: true,
            },
            user_idx: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            receiver_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            condition_json: {
                type: Sequelize.TEXT,
                defaultValue: null,
                allowNull: true,
            },
            progress_state: {
                type: Sequelize.INTEGER.UNSIGNED,
                defaultValue: 0,
                allowNull: false,
            },
            valid_state: {
                type: Sequelize.INTEGER.UNSIGNED,
                defaultValue: 1,
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
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'promotion_info',
            tableName: 'promotion_info',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){
        //관계 정의 1:1, 1:N, N:N
        // 1:1
        db.PromotionInfo.belongsTo(db.PromotionReceiverInfo, {foreignKey: 'receiver_id', targetKey: 'receiver_id'});
    }
}