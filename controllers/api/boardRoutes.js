const router = require("express").Router();
const { Board } = require("../../models");
const withAuth = require('../../utils/auth');

//api route to create new board.
router.post("/", withAuth, async (req, res) => {
  try {
    const newBoard = await Board.create({...req.body,
        user_id: req.session.user_id
    });
    res.status(200).json(newBoard);
  } catch (err) {
    res.status(400).json(err);
  }
});

//api route to delete board.
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const boardData = await Board.findOne({ where: { id: req.params.id, user_id: req.session.user_id, }, });

    if (!boardData) {
      res.status(400).json({
        message: "Board does not exist on this id",
      });
      return;
    }

    res.staus(200).json(boardData);
} catch(err) {
    res.status(500).json(err);
}
});


module.exports = router;
