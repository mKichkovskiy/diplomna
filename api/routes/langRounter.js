const Router = require('express')
const languageController = require('../controllers/languageController')
const router = new Router()
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('seeker'),  languageController.create)
router.get('/', languageController.getAll)
router.get('/:id', languageController.getOne)

module.exports = router