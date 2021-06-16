const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const categoryRouter = require('./categotyRouter')
const organisationRouter = require('./organisationRouter')
const postJobRouter = require('./postJobRouter')
const resumeRouter = require('./resumeRouter')
const seekerRouter = require('./seekerRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/organisation',  organisationRouter)
router.use('/organisation/postjob',  postJobRouter)
router.use('/profile',  seekerRouter)
router.use('/resume',  resumeRouter)




module.exports = router