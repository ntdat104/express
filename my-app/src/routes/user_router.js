const express = require("express");
const router = express.Router();
const controller = require("../controllers/user_controller");

/* GET user page. */
router.get("/", controller.index);

module.exports = router;
