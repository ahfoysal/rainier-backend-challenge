const { z } = require('zod')

const login = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
})
const AuthValidation = { login }
module.exports = AuthValidation
