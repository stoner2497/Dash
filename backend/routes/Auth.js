const express = require("express");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();

const User = require("../models/User");
const Keys = require("../config/keys");

const AuthController = require('../controller/AuthController')



router.post("/register", AuthController.register);


module.exports = router;
