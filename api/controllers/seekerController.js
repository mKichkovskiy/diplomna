const {Profile} = require('../models/models')
const ApiErr = require('../error/apiErr')


class SeekerController{
    async create(req, res, next){
        try {
            let {full_name, birthday, citi_of_residents, phone} = req.body
            const user = req.user
            const organisation = await Profile.create({full_name, birthday, citi_of_residents, phone, userId: user.id})
            return res.json(organisation)
        }catch (e){
            next(ApiErr.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        const profile = await Profile.findAndCountAll({ limit, offset})
        return res.json(profile)
    }

    async getOne(req, res){
        const {id} = req.params
        const profile = await  Profile.findOne({where: {id}},)
        return res.json(profile)
    }
}

module.exports = new SeekerController()