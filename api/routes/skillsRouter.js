const Router = require('express')
const skillController = require('../controllers/skillController')
const router = new Router()
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('seeker'), skillController.create)
router.get('/', skillController.getAll)
router.get('/:id', skillController.getOne)

module.exports = router