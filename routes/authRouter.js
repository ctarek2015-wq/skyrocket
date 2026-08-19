const express = require("express");
const router = express.Router({ mergeParams: true });
const isSignedIn = require("../middleware/isSignedIn");
const authCtrl = require("../controllers/authCtrl");

// PUBLIC ROUTES
router.get("/sign-up", authCtrl.signup);
router.post("/sign-up", authCtrl.register);
router.get("/sign-in", authCtrl.signin);
router.post("/sign-in", authCtrl.login);

// PRIVATE ROUTES
router.get("/auth/sign-out", authCtrl.signout);

module.exports = router;
