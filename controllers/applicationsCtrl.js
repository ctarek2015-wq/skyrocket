const User = require("../models/users");

const index = async (req, res) => {
  try {
    res.render("applications/index.ejs");
    const user = await User.findById(req.params.id);
    const application = user.applications;
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = { index };
