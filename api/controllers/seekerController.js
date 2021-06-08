const {Seeker} = require('../models/models')
const ApiErr = require('../error/apiErr')


class SeekerController{
    async create(req, res, next){
        try {
            let {full_name, birthday, citi_of_residents, address} = req.body
            const organisation = await Seeker.create({full_name, birthday, citi_of_residents, address})
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
        const organisations = await Seeker.findAndCountAll({ limit, offset})
        return res.json(organisations)
    }

    async getOne(req, res){
        const {id} = req.params
        const organisation = await  Seeker.findOne({where: {id}},)
        return res.json(organisation)
    }
}

module.exports = new SeekerController()