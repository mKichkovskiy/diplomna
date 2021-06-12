const Router = require('express')
const skillController = require('../controllers/skillController')
const router = new Router()
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('seeker'), skillController.create)
router.get('/', skillController.getAll)
router.get('/:id', skillController.getOne)
router.put('/:id',checkRole('seeker'), skillController.edit)
router.delete('/:id',checkRole('seeker'), skillController.delete)

module.exports = router