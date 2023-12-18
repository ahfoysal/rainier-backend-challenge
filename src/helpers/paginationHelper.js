const calculatePagination = options => {
  const page = Number(options.page || 1)
  const limit = Number(options.limit || 5)
  const skip = (page - 1) * limit
  const sortBy = options.sortBy || 'createdAt'
  const sortOrder = options.sortOrder || 'desc'
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  }
}

const paginationHelper = {
  calculatePagination,
}

module.exports = paginationHelper
