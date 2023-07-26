const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BoardComment extends Model {}

BoardComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        board_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'board',
                key: 'id',
            },
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'comment',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'boardComment',

    }
);

module.exports = BoardComment;