const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    req.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
