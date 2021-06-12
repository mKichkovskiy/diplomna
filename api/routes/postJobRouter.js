const Router = require('express')
const router = new Router()
const postJobController = require('../controllers/postJobController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/',checkRole('employer'),  postJobController.create)
router.get('/', postJobController.getAll)
router.get('/:id', postJobController.getOne)

module.exports = router