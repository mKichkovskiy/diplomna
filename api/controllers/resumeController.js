const {Resume, Skills, Language, Education} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiErr = require('../error/apiErr')



class ResumeController{
    async create(req, res, next){
        try {
            let {title, category, salary, location, desc, employ_type, edus, skills, langs} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpeg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const user = req.user
            const resume = await Resume.create({userId: user.id, title, category , location, salary, desc, employ_type, img: filename})
            
           
            if(edus){
                edus = JSON.parse(edus)
                edus.forEach(i => 
                    Education.create({
                        level: i.level,
                        name_univ: i.level,
                        speciality: i.speciality,
                        citi: i.citi,
                        resumeId: resume.id
                    })
                    )
            }

            if(skills){
                skills = JSON.parse(skills)
                skills.forEach(i => 
                    Skills.create({
                        title: i.title,
                        last_used: i.last_used,
                        experience: i.experience,
                        proficiency: i.proficiency,
                        resumeId: resume.id
                    })
                    )
            }

            if(langs){
                langs = JSON.parse(langs)
                langs.forEach(i => 
                    Language.create({
                        title: i.title,
                        proficiency: i.proficiency,
                        resumeId: resume.id
                    })
                    )
            }



            return res.json(resume)
        }catch (e){
            next(ApiErr.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const resumes = await Resume.findAndCountAll()
        return res.json(resumes)
    }

    async getOne(req, res){
        const {id} = req.params
        const profile = await  Resume.findOne(
            {where: {id},
            include: [
                {model: Education, as: 'edus'},
                {model: Skills, as: 'skills'},
                {model: Language, as: 'langs'}
            ]
        },
            
            )
        return res.json(profile)
    }

    
    
    async edit(req,res){
        const id = req.params.id
        const {title, category, salary, location, desc, employ_type} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".jpeg"
        img.mv(path.resolve(__dirname, '..', 'static', filename))
        const up = await Resume.update({title: title, category: category, salary: salary, location: location, desc: desc, employ_type: employ_type, img: filename },{where: {id}})
        return res.json(up)
    }

    async delete(req, res){
        const id = req.params.id
        const up = await Resume.destroy({ where: {id}})
        return res.json(up)
    }
}

module.exports = new ResumeController()