const {PostJob} = require('../models/models')
const ApiErr = require('../error/apiErr')


class PostJobController{
    async create(req, res, next){
        try {
            const {title, salary, category, desc, location} = req.body
            const user = req.user
            const postJob = await PostJob.create({title, salary, category , desc, location, userId: user.id})
            return res.json(postJob)
        }catch (e){
            next(ApiErr.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        const postJobs = await PostJob.findAndCountAll({ limit, offset})
        return res.json(postJobs)
    }

    async getOne(req, res){
        const {id} = req.params
        const postJob = await  PostJob.findOne({where: {id}},)
        return res.json(postJob)
    }

    async edit(req,res){
        const id = req.params.id
        const {title, salary, category, desc, location} = req.body
        const up = await PostJob.update({title: title, salary: salary, category: category, desc: desc, location: location },{where: {id}})
        return res.json(up)
    }

    async delete(req, res){
        const id = req.params.id
        const up = await PostJob.destroy({ where: {id}})
        return res.json(up)
    }
}

module.exports = new PostJobController()