const express = require("express");
const router = express.Router({ mergeParams: true });
const applicationsCtrl = require("../controllers/applicationsCtrl");

//Apps

router.get("/", applicationsCtrl.index);
router.get("/new", applicationsCtrl.newApp);
router.post("/", applicationsCtrl.addApp);
router.get("/:appId", applicationsCtrl.showApp);
router.delete("/:appId", applicationsCtrl.deleteApp);
router.get("/:appId/edit", applicationsCtrl.editApp);
router.put("/:appId", applicationsCtrl.submitEdit);

module.exports = router;
