const { z } = require('zod')

const createUser = z.object({
  body: z.object({
    email: z.string().email({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    name: z.string({
      required_error: 'Name is required',
    }),
  }),
})
const UserValidation = { createUser }
module.exports = UserValidation
