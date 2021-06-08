const Router = require('express')
const router = new Router()
const postJobController = require('../controllers/postJobController')


router.post('/',  postJobController.create)
router.get('/', postJobController.getAll)
router.get('/:id', postJobController.getOne)

module.exports = router