const withAuth = (req, res, next) => {
  if (!req.session.loggedin) {
    req.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
