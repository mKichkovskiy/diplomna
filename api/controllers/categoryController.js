const {Category} = require('../models/models')


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
        const {id} = req.params
        const cat = await  Category.findOne({where: {id}},)
        return res.json(cat)
    }

    async edit(req,res){
        const id = req.params.id
        const {title} = req.body
        const up = await Category.update({title: title },{where: {id}})
        return res.json(up)
    }

    async delete(req, res){
        const id = req.params.id
        const up = await Category.destroy({ where: {id}})
        return res.json(up)
    }
}

module.exports = new CategoryController()