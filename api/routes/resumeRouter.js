const Router = require('express')
const router = new Router()
const resumeController = require('../controllers/resumeController')


router.post('/', resumeController.create)
router.get('/', resumeController.getAll)
router.get('/:id', resumeController.getOne)

module.exports = router