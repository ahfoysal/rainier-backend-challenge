const express = require('express')
const CourseController = require('./course.controller')
const validateRequest = require('../../middlewares/validateRequest')
const CourseValidation = require('./course.validate')
const { ENUM_USER_ROLE } = require('../../../enums/user')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.post(
  '/',
  validateRequest(CourseValidation.createCourse),
  auth(ENUM_USER_ROLE.ADMIN),
  CourseController.createCourse,
)

router.get('/', CourseController.getAllCourse)
router.get('/:id', CourseController.getSingleCourse)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), CourseController.updateCourse)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), CourseController.deleteCourse)

exports.CourseRoutes = router
