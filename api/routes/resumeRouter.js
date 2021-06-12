const Router = require('express')
const router = new Router()
const resumeController = require('../controllers/resumeController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('seeker'), resumeController.create)
router.get('/', resumeController.getAll)
router.get('/:id', resumeController.getOne)

module.exports = router