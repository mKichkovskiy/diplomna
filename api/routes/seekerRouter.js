const Router = require('express')
const router = new Router()
const seekerController = require('../controllers/seekerController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('seeker'), seekerController.create)
router.get('/', seekerController.getAll)
router.get('/:id', seekerController.getOne)

module.exports = router