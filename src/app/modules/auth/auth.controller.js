const httpStatus = require('http-status')
const sendResponse = require('../../../shared/sendResponse')
const AuthService = require('./auth.service')
const catchAsync = require('../../../shared/catchAsync')
const config = require('../../../config')

const login = catchAsync(async (req, res) => {
  const data = req.body

  const result = await AuthService.login(data)
  // Refresh token as a cookie
  const { refreshToken, ...others } = result
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  }
  res.cookie('refreshToken', refreshToken, cookieOptions)
  // Delete
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully!',
    data: others,
  })
})

const AuthController = {
  login,
}

module.exports = AuthController
