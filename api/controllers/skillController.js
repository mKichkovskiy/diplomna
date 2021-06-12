const {Skills} = require('../models/models')
const ApiErr = require('../error/apiErr')


class SkillsController{
    async create(req, res, next){
        try {
            let {title, last_used, experience, proficiency} = req.body
            const user = req.user
            const skill = await Skills.create({title, last_used, experience, proficiency, userId: user.id})
            return res.json(skill)
        }catch (e){
            next(ApiErr.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        const skill = await Skills.findAndCountAll({ limit, offset})
        return res.json(skill)
    }

    async getOne(req, res){
        const {id} = req.params
        const skill = await  Skills.findOne({where: {id}},)
        return res.json(skill)
    }
    async edit(req,res){
        const id = req.params.id
        const {title, last_used, experience, proficiency} = req.body
        const up = await Skills.update({title: title, last_used: last_used, experience: experience, proficiency: proficiency },{where: {id}})
        return res.json(up)
    }

    async delete(req, res){
        const id = req.params.id
        const up = await Skills.destroy({ where: {id}})
        return res.json(up)
    }
}

module.exports = new SkillsController()