const express = require("express");
const router = express.Router({ mergeParams: true });
const pagesCtrl = require("../controllers/pagesCtrl");

//Pages

router.get("/", pagesCtrl.home);

module.exports = router;
