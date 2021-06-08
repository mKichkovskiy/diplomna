const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const checkRoll = require('../middleware/roleMiddleware')

router.post('/',checkRoll('admin'), categoryController.create)
router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getOne)

module.exports = router