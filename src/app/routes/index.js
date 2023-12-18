const express = require('express')
const { AuthRoutes } = require('../modules/auth/auth.route')
const { UserRoutes } = require('../modules/user/user.route')
const { CourseRoutes } = require('../modules/course/course.route')

const router = express.Router()

const routes = [
  {
    path: '/courses',
    route: CourseRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
]

routes.forEach(route => {
  router.use(route.path, route.route)
})

module.exports = router
