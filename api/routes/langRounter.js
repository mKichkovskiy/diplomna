const Router = require('express')
const languageController = require('../controllers/languageController')
const router = new Router()
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('seeker'),  languageController.create)
router.get('/', languageController.getAll)
router.get('/:id', languageController.getOne)
router.put('/:id',checkRole('seeker'), languageController.edit)
router.delete('/:id',checkRole('seeker'), languageController.delete)

module.exports = router