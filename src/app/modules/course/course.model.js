const { Schema, model } = require('mongoose')

const CourseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      required: true,
    },

    topics: [
      {
        type: String,

        required: true,
      },
    ],
    schedule: {
      startDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
        required: true,
      },
      classDays: [
        {
          type: String,
          required: true,
        },
      ],
      classTime: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

const Course = model('Course', CourseSchema)
module.exports = Course
