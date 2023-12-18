const express = require('express')
const CourseController = require('./course.controller')
const validateRequest = require('../../middlewares/validateRequest')
const CourseValidation = require('./course.validate')

const router = express.Router()

router.post(
  '/',
  validateRequest(CourseValidation.createCourse),
  CourseController.createCourse,
)

router.get('/', CourseController.getAllCourse)
router.get('/:id', CourseController.getSingleCourse)
router.patch(
  '/:id',

  CourseController.updateCourse,
)
router.delete(
  '/:id',

  CourseController.deleteCourse,
)

exports.CourseRoutes = router
