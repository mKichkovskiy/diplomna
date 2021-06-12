const {Resume} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiErr = require('../error/apiErr')


class ResumeController{
    async create(req, res, next){
        try {
            let {title, category, salary, location, desc, employ_type} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpeg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const user = req.user
            const resume = await Resume.create({userId: user.id, title, category , location, salary, desc, employ_type, img: filename})
            return res.json(resume)
        }catch (e){
            next(ApiErr.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        const resumes = await Resume.findAndCountAll({ limit, offset})
        return res.json(resumes)
    }

    async getOne(req, res){
        const {id} = req.params
        const resume = await  Resume.findOne({where: {id}},)
        return res.json(resume)
    }
}

module.exports = new ResumeController()