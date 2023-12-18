const User = require('./user.model')
const httpStatus = require('http-status')
const ApiError = require('../../../errors/ApiError')
const config = require('../../../config')
const { jwtHelpers } = require('../../../helpers/jwtHelper')

const createUser = async user => {
  user.role = 'user'
  const existingApplied = await User.findOne({ email: user.email })
  if (existingApplied) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email Already Exists')
  }
  const newUser = (await User.create(user)).toJSON()
  // eslint-disable-next-line no-unused-vars
  const { password, ...restData } = newUser

  if (!newUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user')
  }
  const { _id: userId, role, email: userEmail, imageUrl } = newUser

  const accessToken = jwtHelpers.generateToken(
    { id: userId, role, email: userEmail, imageUrl },
    config.jwt.secret,
    config.jwt.expires_in,
  )
  return { user: restData, accessToken }
}

const UserService = {
  createUser,
}

module.exports = UserService
