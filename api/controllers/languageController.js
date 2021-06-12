const {Language} = require('../models/models')
const ApiErr = require('../error/apiErr')


class LanguageController{
    async create(req, res, next){
        try {
            let {title, proficiency} = req.body
            const user = req.user
            const lan = await Language.create({title, proficiency, userId: user.id})
            return res.json(lan)
        }catch (e){
            next(ApiErr.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        const lan = await Language.findAndCountAll({ limit, offset})
        return res.json(lan)
    }

    async getOne(req, res){
        const {id} = req.params
        const lan = await  Language.findOne({where: {id}},)
        return res.json(lan)
    }
}

module.exports = new LanguageController()