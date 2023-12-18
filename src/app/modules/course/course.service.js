const paginationHelper = require('../../../helpers/paginationHelper')
const { courseSearchableFields } = require('./course.constant')
const Course = require('./course.model')

const createCourse = async payload => {
  const newCourse = await Course.create(payload)
  return newCourse
}
const getAllCourse = async (filters, pagination) => {
  const { searchTerm, ...filterData } = filters
  const andCondition = []
  console.log(searchTerm)

  if (searchTerm) {
    andCondition.push({
      $or: courseSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      $and: Object.entries(filterData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(pagination)

  const sortConditions = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {}

  const result = await Course.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await Course.count()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}
const updateCourse = async (id, payload) => {
  console.log(payload)
  const result = await Course.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })

  return result
}
const getSingleCourse = async id => {
  const result = await Course.findById(id)
  return result
}
const deleteCourse = async id => {
  const result = await Course.findByIdAndDelete(id)
  return result
}

const CourseService = {
  createCourse,
  getAllCourse,
  updateCourse,
  getSingleCourse,
  deleteCourse,
}

module.exports = CourseService

// const deleteCourse = async (id, userID) => {
//   const session = await Course.startSession()
//   session.startTransaction()

//   try {
//     const options = { session }

//     const result = await Course.findByIdAndDelete(id, options)

//     await User.updateOne({ _id: userID }, { $pull: { myJobs: id } }, options)

//     await session.commitTransaction()
//     session.endSession()

//     return result
//   } catch (error) {
//     await session.abortTransaction()
//     session.endSession()
//     throw error
//   }
// }
// const createCourse = async (jobData, userID) => {
//   jobData.postedBy = userID
//   const session = await Course.startSession()
//   session.startTransaction()

//   try {
//     const options = { session }

//     const newJob = await Course.create([jobData], options)

//     const createdJob = newJob[0]

//     await User.updateOne(
//       { _id: userID },
//       { $push: { myJobs: createdJob._id } },
//       options,
//     )

//     await session.commitTransaction()
//     session.endSession()

//     return createdJob
//   } catch (error) {
//     await session.abortTransaction()
//     session.endSession()
//     throw error
//   }
// }
