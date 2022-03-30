const express = require("express");
const router = express.Router();
const { validate } = require("../middleware/validationResultHandler");
const userController = require("../../api/controllers/userController");

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
module.exports = router;
