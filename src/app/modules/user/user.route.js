const express = require('express')
const UserController = require('./user.controller')
const validateRequest = require('../../middlewares/validateRequest')
const UserValidation = require('./user.validation')

const router = express.Router()

router.post(
  '/',
  validateRequest(UserValidation.createUser),
  UserController.createUser,
)

exports.UserRoutes = router
