const User = require('./User');
const Board = require('./Board');
const Comment = require('./Comment');

User.hasMany(Board, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Board.belongsTo(User, {
    foerignKey: 'user_id'
});

Board.hasMany(Comment, {
    foeignKey: 'board_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Board, {
    foreignKey: 'board_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Board,
    Comment
};