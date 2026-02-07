const express = require("express");
const { signupValidation, loginValidation } = require("../Middlewares/AuthValidation");
const { signup, signupInsert, login } = require("../Controllers/AuthController");

const router = express.Router();

router.post("/signup",signupValidation, signup);
router.post("/login",loginValidation, login);

module.exports = router;