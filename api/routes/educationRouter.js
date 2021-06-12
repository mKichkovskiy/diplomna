const Router = require('express')
const educationController = require('../controllers/educationController')
const router = new Router()
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('seeker'), educationController.create)
router.get('/', educationController.getAll)
router.get('/:id', educationController.getOne)

module.exports = router