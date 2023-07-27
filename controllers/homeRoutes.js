const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Board, User } = require("../models");

//route for homepage. load board with user info from database
router.get("/", async (req, res) => {
  try {
    const boardData = await Board.findALL({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const boards = boardData.map((board) => board.get({ plain: true }));

    res.render("homepage", { boards, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for board by id
router.get("/board/:id", async (req, res) => {
  try {
    const boardData = await Board.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const board = board.get({ plain: true });

    res.render("board", { ...board, loggedIn: req.sessiong.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for personal dashboard
router.get('/dashboard', withAuth, async (req,res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{model: Board}],
        });
        const user = userData.get({plain: true});
        res.render('dashboard', {...user, loggedIn: true});
    } catch(err) {
        res.status(500).json(err);
    }
});

//route for login
router.get('/login', (req,res) =>{
    if (req.session.loggedIn) {
        res.render('dashboard');
        return;
    } else {
        res.render('login');
    }
});

module.exports = router;