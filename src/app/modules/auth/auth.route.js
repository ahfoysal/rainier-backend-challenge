const express = require('express')
const AuthController = require('./auth.controller')
const validateRequest = require('../../middlewares/validateRequest')
const AuthValidation = require('./auth.validation')

const router = express.Router()

router.post(
  '/login',
  validateRequest(AuthValidation.login),
  AuthController.login,
)
exports.AuthRoutes = router
