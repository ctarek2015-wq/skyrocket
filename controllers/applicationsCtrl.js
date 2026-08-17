const User = require("../models/users");

const index = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("applications/index.ejs", { applications: user.applications });
  } catch (err) {
    console.log(err.message);
  }
};

const newApp = async (req, res) => {
  try {
    res.render("applications/newApp.ejs");
  } catch (err) {
    console.log(err.message);
  }
};

const addApp = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.applications.push(req.body);
    await user.save();
    res.redirect(`/users/${req.params.id}/applications`);
  } catch (err) {
    console.log(err.message);
    res.redirect(`/users/${req.params.id}/applications/new`);
  }
};

const showApp = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const application = await user.applications.id(req.params.appId);
    res.render("applications/showApp.ejs", { application });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteApp = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.applications.pull(req.params.appId);
    await user.save();
    res.redirect(`/users/${req.params.id}/applications`);
  } catch (err) {
    console.log(err.message);
  }
};
const editApp = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const application = user.applications.id(req.params.appId);
    await user.save();
    res.render("applications/editApp.ejs", { application });
  } catch (err) {
    console.log(err.message);
  }
};

const submitEdit = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const application = user.applications.id(req.params.appId);
    application.set(req.body);
    await user.save();
    res.redirect(`/users/${req.params.id}/applications/${req.params.appId}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  index,
  newApp,
  addApp,
  showApp,
  deleteApp,
  editApp,
  submitEdit,
};
