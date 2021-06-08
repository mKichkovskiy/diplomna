const sequelize = require('../database')
const DataTypes = require('sequelize')

const User = sequelize.define('user',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: {type: DataTypes.STRING, unique: true },
        password: {type: DataTypes.STRING},
        role: {type: DataTypes.STRING, defaultValue: "user"}
    }
)

const Category = sequelize.define('category',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: {type: DataTypes.STRING, unique: true}
    }
)

const Organisation = sequelize.define('organisation',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: {type: DataTypes.STRING, allowNull: false},
        type: {type: DataTypes.STRING, allowNull: false},
        num_of_emp: {type: DataTypes.INTEGER, defaultValue: 0},
        desc: {type: DataTypes.STRING, defaultValue: " "},
        rating: {type: DataTypes.INTEGER, defaultValue: 0},
        img: {type: DataTypes.STRING, allowNull: false}
    }
)

const PostJob = sequelize.define('post_job',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title: {type: DataTypes.STRING, allowNull: false},
            category: {type: DataTypes.STRING, allowNull: false},
            desc: {type: DataTypes.STRING, defaultValue: " "},
            salary: {type: DataTypes.INTEGER, defaultValue: 0},
            location: {type: DataTypes.STRING, defaultValue: " "}
    }
)

const Seeker = sequelize.define('seeker',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            full_name: {type: DataTypes.STRING, allowNull: false},
            birthday: {type: DataTypes.DATEONLY, allowNull: false},
            citi_of_residents: {type: DataTypes.STRING, allowNull: false},
            address: {type: DataTypes.STRING, allowNull: false}
    }
)

const Numbers = sequelize.define('numbers',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            phone_num: {type: DataTypes.STRING, allowNull: false}
    }
)

const Resume = sequelize.define('resume',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title: {type: DataTypes.STRING, allowNull: false},
            img: {type: DataTypes.STRING, allowNull: false},
            category: {type: DataTypes.STRING, allowNull: false},
            desc: {type: DataTypes.STRING, allowNull: false},
            salary: {type: DataTypes.INTEGER, defaultValue: 0},
            location: {type: DataTypes.STRING, allowNull: false}
    }
)

const Education = sequelize.define('education',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            level: {type: DataTypes.STRING, allowNull: false},
            name_univ: {type: DataTypes.STRING, allowNull: false},
            speciality: {type: DataTypes.STRING, allowNull: false},
            citi: {type: DataTypes.STRING, allowNull: false},
            desc: {type: DataTypes.STRING, defaultValue: ""},
            date_start: {type: DataTypes.DATEONLY, allowNull: false},
            date_end: {type: DataTypes.DATEONLY, allowNull: false}
    }
)



const Language = sequelize.define('language',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            lang: {type: DataTypes.STRING, allowNull: false}
    }
)

const Skills = sequelize.define('skills',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title: {type: DataTypes.STRING, allowNull: false},
            last_used: {type: DataTypes.STRING, allowNull: false},
            experience: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
    }
)


const Proficiency = sequelize.define('proficiency',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title: {type: DataTypes.STRING, allowNull: false}
    }
)


User.hasMany(Organisation)
Organisation.belongsTo(User)

User.hasMany(PostJob)
PostJob.belongsTo(User)

User.hasMany(Seeker)
Seeker.belongsTo(User)

User.hasMany(Resume)
Resume.belongsTo(User)

User.hasMany(Category)
Category.belongsTo(User)

Organisation.hasMany(Numbers)
Numbers.belongsTo(Organisation)

Seeker.hasMany(Numbers)
Numbers.belongsTo(Seeker)

Resume.hasMany(Skills)
Skills.belongsTo(Resume)

Resume.hasMany(Language)
Language.belongsTo(Resume)

Resume.hasMany(Education)
Education.belongsTo(Resume)



module.exports = {
    User,
    Category,
    Organisation,
    Proficiency,
    PostJob,
    Resume,
    Seeker,
    Numbers,
    Skills,
    Language,
    Education
}