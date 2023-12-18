const sendResponse = require('../../../shared/sendResponse')
const httpStatus = require('http-status')
const catchAsync = require('../../../shared/catchAsync')
const paginationFields = require('../../constants/pagination')
const pick = require('../../../shared/pick')
const CourseService = require('./course.service')
const { courseFilterableFields } = require('./course.constant')

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseService.createCourse(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully!',
    data: result,
  })
})
const getAllCourse = catchAsync(async (req, res) => {
  const paginationOptions = pick(req.query, paginationFields)
  const filters = pick(req.query, courseFilterableFields)
  const result = await CourseService.getAllCourse(filters, paginationOptions)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course fetched successfully',
    meta: result.meta,
    data: result.data,
  })
})
const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CourseService.getSingleCourse(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved successfully',
    data: result,
  })
})
const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const updatedData = req.body
  const result = await CourseService.updateCourse(id, updatedData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully',
    data: result,
  })
})

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await CourseService.deleteCourse(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully',
    data: result,
  })
})

const CourseController = {
  createCourse,
  getAllCourse,
  updateCourse,
  getSingleCourse,
  deleteCourse,
}

module.exports = CourseController

// const createCourse = catchAsync(async (req, res) => {
//   const user = req.user

//   const result = await CourseService.createJob(req.body, user.id)

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Course created successfully!',
//     data: result,
//   })
// })

// const deleteCourse = catchAsync(async (req, res) => {
//   const { id } = req.params
//   const user = req.user
//   const result = await CourseService.deleteCourse(id, user.id)

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Course deleted successfully',
//     data: result,
//   })
// })
