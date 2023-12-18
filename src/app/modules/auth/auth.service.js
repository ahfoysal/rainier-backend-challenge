const httpStatus = require('http-status')
const User = require('../user/user.model')
const ApiError = require('../../../errors/ApiError')
const { jwtHelpers } = require('../../../helpers/jwtHelper')
const config = require('../../../config')

const login = async payload => {
  const { email, password } = payload

  // check user exists
  console.log(email)
  const isUserExist = await User.isUserExist(email)
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  // generate access token
  const { _id: userId, role, email: userEmail, imageUrl } = isUserExist
  // eslint-disable-next-line no-unused-vars
  const { password: removedPassword, ...restData } = isUserExist
  console.log(isUserExist)
  const accessToken = jwtHelpers.generateToken(
    { id: userId, role, email: userEmail, imageUrl },
    config.jwt.secret,
    config.jwt.expires_in,
  )
  const refreshToken = jwtHelpers.generateToken(
    { id: userId, role, email: userEmail },
    config.jwt.refresh,
    config.jwt.refresh_expire_in,
  )
  console.log(refreshToken)
  return { accessToken, refreshToken, user: restData }
}

const AuthService = {
  login,
}

module.exports = AuthService
