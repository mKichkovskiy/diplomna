const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const categoryRouter = require('./categotyRouter')
const organisationRouter = require('./organisationRouter')
const postJobRouter = require('./postJobRouter')
const resumeRouter = require('./resumeRouter')
const seekerRouter = require('./seekerRouter')
const eduRouter = require('./educationRouter')
const lanRouter = require('./langRounter')
const skillRouter = require('./skillsRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/organisation',  organisationRouter)
router.use('/organisation/postjob',  postJobRouter)
router.use('/profile',  seekerRouter)
router.use('/resume',  resumeRouter)
router.use('/education', eduRouter)
router.use('/language', lanRouter)
router.use('/skills', skillRouter)



module.exports = router