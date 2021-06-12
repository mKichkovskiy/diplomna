const Router = require('express')
const router = new Router()
const organisationController = require('../controllers/organisationController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/', checkRole('employer'), organisationController.create)
router.get('/', organisationController.getAll)
router.get('/:id', organisationController.getOne)
router.put('/:id',checkRole('employer'), organisationController.edit)
router.delete('/:id',checkRole('employer'), organisationController.delete)

module.exports = router