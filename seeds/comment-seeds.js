const Comment = require("../models");

const commentData = [
  {
    content: "first comment for board#1",
    date_posted: "7/12/2023",
    user_id: 3,
    board_id: 1,
  },
  {
    content: "first comment for board#2",
    date_posted: "7/12/2023",
    user_id: 3,
    board_id: 2,
  },
  {
    content: "second comment for board#2",
    date_posted: "7/13/2023",
    user_id: 3,
    board_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
