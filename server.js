const path = require("path");
const express = require("express");
const session = require("express-session");
const hdbr = require("express-handlebars");
const routes = require("./controllers");
const helper = require("./utils/helper");

const sequelize = require("./config/connection");
const sequelizeStore = require("connect-session-sequilize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = hdbr.create([helper]);

const sess = {
  secret: "session token",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(express.static(path.json(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening to ${PORT}`));
});
