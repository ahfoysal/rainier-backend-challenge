const { z } = require('zod')

const createCourse = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    duration: z.string({
      required_error: 'Duration is required',
    }),
    level: z.string({
      required_error: 'Level is required',
    }),
    topics: z.array(
      z.string({
        required_error: 'Topic ID is required',
      }),
    ),
    schedule: z.object({
      startDate: z.string({
        required_error: 'Start date is required',
      }),
      endDate: z.string({
        required_error: 'End date is required',
      }),
      classDays: z.array(
        z.string({
          required_error: 'Class day is required',
        }),
      ),
      classTime: z.string({
        required_error: 'Class time is required',
      }),
    }),
  }),
})

const CourseValidation = { createCourse }
module.exports = CourseValidation
