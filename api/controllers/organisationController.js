const {Organisation} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiErr = require('../error/apiErr')


class OrganisationController{
    async create(req, res, next){
        try {
            let {title, type, num_of_emp, desc} = req.body
            const user = req.user
            const {img} = req.files
            let filename = uuid.v4() + ".jpeg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))

            const organisation = await Organisation.create({title, type, num_of_emp, desc, img: filename, userId: user.id})
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
        const organisations = await Organisation.findAndCountAll({ limit, offset})
        return res.json(organisations)
    }

    async getOne(req, res){
        const {id} = req.params
        const organisation = await  Organisation.findOne({where: {id}},)
        return res.json(organisation)
    }
    async edit(req,res){
        const id = req.params.id
        const {title, type, num_of_emp, desc} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".jpeg"
        img.mv(path.resolve(__dirname, '..', 'static', filename))
        const up = await Organisation.update({title: title, type: type, num_of_emp: num_of_emp, desc: desc, img: filename },{where: {id}})
        return res.json(up)
    }

    async delete(req, res){
        const id = req.params.id
        const up = await Organisation.destroy({ where: {id}})
        return res.json(up)
    }
}

module.exports = new OrganisationController()