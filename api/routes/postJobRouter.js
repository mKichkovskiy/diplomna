const Router = require('express')
const router = new Router()
const postJobController = require('../controllers/postJobController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('employer'),  postJobController.create)
router.get('/all', postJobController.getAll)
router.get('/:id', postJobController.getOne)
router.put('/:id',checkRole('employer'), postJobController.edit)
router.delete('/:id',checkRole('employer'), postJobController.delete)

module.exports = router