const sequelize = require("../config/connection");
const { User, Comment, Board } = require("../models");

const userData = require("./userData.json");
const boardData = require("./boardData.json");
const commentData = require("./commentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Board.bulkCreate(boardData, {
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
