const {Category} = require('../models/models')

class CategoryController{
    async create(req, res){
        const {title} = req.body
        const category = await Category.create({title})
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