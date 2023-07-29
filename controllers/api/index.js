const router = require("express").Router();
const userRoutes = require("./userRoutes");
const boardRoutes = require("./boardRoutes");

router.use("/users", userRoutes);
router.use("/board", boardRoutes);

module.exports = router;
