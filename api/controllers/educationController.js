const {Education} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiErr = require('../error/apiErr')


class EducationController{
    async create(req, res, next){
        try {
            let {level, name_univ, speciality, citi, desc, date_start, date_end} = req.body
            const user = req.user
            const edu = await Education.create({level, name_univ, speciality, citi, desc, date_start, date_end, userId: user.id})
            return res.json(edu)
        }catch (e){
            next(ApiErr.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        const edu = await Education.findAndCountAll({ limit, offset})
        return res.json(edu)
    }

    async getOne(req, res){
        const {id} = req.params
        const edu = await  Education.findOne({where: {id}},)
        return res.json(edu)
    }

    async edit(req,res){
        const id = req.params.id
        const {level, name_univ, speciality, citi, desc, date_start, date_end} = req.body
        const up = await Education.update(
            {level: level, name_univ: name_univ, speciality: speciality, citi: citi, desc: desc, date_start: date_start, date_end: date_end  }
            ,{where: {id}})
        return res.json(up)
    }

    async delete(req, res){
        const id = req.params.id
        const up = await Education.destroy({ where: {id}})
        return res.json(up)
    }
}

module.exports = new EducationController()