const Router = require('express')
const router = new Router()
const resumeController = require('../controllers/resumeController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('seeker'), resumeController.create)
router.get('/', resumeController.getAll)
router.get('/:id', resumeController.getOne)
router.put('/:id',checkRole('seeker'), resumeController.edit)
router.delete('/:id',checkRole('seeker'), resumeController.delete)

module.exports = router