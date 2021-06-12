const Router = require('express')
const router = new Router()
const seekerController = require('../controllers/seekerController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('seeker'), seekerController.create)
router.get('/', seekerController.getAll)
router.get('/:id', seekerController.getOne)
router.put('/:id',checkRole('seeker'), seekerController.edit)
router.delete('/:id',checkRole('seeker'), seekerController.delete)

module.exports = router