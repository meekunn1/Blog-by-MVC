const { User } = require("../models");

const userData = [
  {
    username: "Anonymouse",
    email: "amouse@email.com",
    password: "password1234",
  },
  {
    username: "Tester",
    email: "test@email.com",
    password: "password5678",
  },
  {
    username: "JohnSmith",
    email: "traveler@email.com",
    password: "passwordnumbers",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
