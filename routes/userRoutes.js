const express = require('express');
const { userController } = require('../controllers/userController');

const userRoutes = express.Router()

userRoutes.post("/auth", userController.auth)

module.exports = { userRoutes }