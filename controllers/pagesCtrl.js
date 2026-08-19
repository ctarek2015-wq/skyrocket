const home = (req, res) => {
  if (req.session.user) {
    res.redirect(`/users/${req.session.user._id}/applications`);
  } else {
    res.render("index.ejs");
  }
};

module.exports = { home };
