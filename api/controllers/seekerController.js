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
        const profile = await  Profile.findOne({where: {userId: id}},)
        return res.json(profile)
    }

    async edit(req,res){
        const id = req.params.id
        const {full_name, birthday, citi_of_residents, phone} = req.body
        const up = await Profile.update({ full_name: full_name, birthday: birthday, citi_of_residents: citi_of_residents, phone: phone},{where: {id}})
        return res.json(up)
    }

    async delete(req, res){
        const id = req.params.id
        const up = await Profile.destroy({ where: {id}})
        return res.json(up)
    }
}

module.exports = new SeekerController()