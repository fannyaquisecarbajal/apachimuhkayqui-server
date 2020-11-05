'use strict'

function instance_itemModel (sequelize, DataTypes) {
    const instance_itemModel = sequelize.define(
        'instance_item',
        {
            id: DataTypes.INTEGER,
            item_id: DataTypes.INTEGER,
            talla: DataTypes.STRING,
            volumen: DataTypes.STRING,
            color: DataTypes.STRING,
            precio: DataTypes.STRING,
            image:DataTypes.STRING,
            description:DataTypes.STRING,
            timestamp_created: DataTypes.DATE
        },
        {  timestamps: false,
            freezeTableName: false
        }
    )
    instance_itemModel.associate = (models) => {
        instance_itemModel.belongsTo(models.User, {
            foreignKey: 'item_id'
        })
    }
    return instance_itemModel
}

module.exports = instance_itemModel