const Router = require('express')
const router = new Router()
const organisationController = require('../controllers/organisationController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/', checkRole('employer'), organisationController.create)
router.get('/', organisationController.getAll)
router.get('/:id', organisationController.getOne)

module.exports = router