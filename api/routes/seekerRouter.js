const Router = require('express')
const router = new Router()
const seekerController = require('../controllers/seekerController')
const checkRoll = require('../middleware/roleMiddleware')

router.post('/',checkRoll('seeker'), seekerController.create)
router.get('/', seekerController.getAll)
router.get('/:id', seekerController.getOne)

module.exports = router