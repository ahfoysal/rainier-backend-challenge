const config = require('../../config')
const handleZodError = require('../../errors/handleZodError')

const validateRequest = schema => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
      cookies: req.cookies,
    })
    return next()
  } catch (err) {
    // next(err)
    console.log(err, 'rrr')
    let statusCode = 500
    let message = 'Something went wrong'
    let errorMessages = []
    const simplifiedError = handleZodError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
    res.status(statusCode).json({
      success: false,
      message,
      errorMessages,
      // stack: config.env !== 'production' ? err.stack : undefined,
    })
  }
}

module.exports = validateRequest
