const bcrypt = require('bcrypt')
const { Schema, model } = require('mongoose')
const config = require('../../../config')

const UserSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },

    email: {
      type: String,

      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

UserSchema.statics.isUserExist = async function (email) {
  const user = await User.findOne(
    { email },
    { id: 1, password: 1, role: 1, email: 1, name: 1, imageUrl: 1 },
  )

  // Check if the user is found
  if (user) {
    // Use toJSON to convert the Mongoose document to a plain JavaScript object
    return user.toJSON()
  }

  // Return null or handle the case where the user is not found
  return null
}

UserSchema.statics.isPasswordMatched = async function (
  givenPassword,
  savedPassword,
) {
  return await bcrypt.compare(givenPassword, savedPassword)
}

// User.create() / user.save()
UserSchema.pre('save', async function (next) {
  // hashing user password
  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )
  if (!user.needsPasswordChange) {
    user.passwordChangedAt = new Date()
  }
  next()
})

const User = model('User', UserSchema)

module.exports = User
