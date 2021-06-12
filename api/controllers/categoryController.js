const {Category, User} = require('../models/models')


class CategoryController{
    async create(req, res){
        const {title} = req.body
        const user = req.user
        const category = await Category.create({title, userId: user.id})
        return res.json(category)
    }

    async getAll(req, res){
        const categories = await Category.findAll()
        return res.json(categories)
    }

    async getOne(req, res){

    }
}

module.exports = new CategoryController()