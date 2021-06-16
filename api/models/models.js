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
        link: {type: DataTypes.STRING, defaultValue: ""},
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

const Profile = sequelize.define('profile',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            full_name: {type: DataTypes.STRING, allowNull: false},
            birthday: {type: DataTypes.DATEONLY, allowNull: false},
            citi_of_residents: {type: DataTypes.STRING, allowNull: false},
            phone: {type: DataTypes.STRING, allowNull: false}
    }
)

const Resume = sequelize.define('resume',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title: {type: DataTypes.STRING, allowNull: false},
            img: {type: DataTypes.STRING, allowNull: false},
            category: {type: DataTypes.STRING, allowNull: false},
            desc: {type: DataTypes.STRING, allowNull: false, defaultValue: ''},
            salary: {type: DataTypes.INTEGER, defaultValue: 0},
            location: {type: DataTypes.STRING, allowNull: false, defaultValue: ''},
            employ_type: {type: DataTypes.STRING, defaultValue: ''}
    }
)

const Education = sequelize.define('education',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            level: {type: DataTypes.STRING, defaultValue: '', allowNull: ''},
            name_univ: {type: DataTypes.STRING, allowNull: false, allowNull: ''},
            speciality: {type: DataTypes.STRING, allowNull: false, allowNull: ''},
            citi: {type: DataTypes.STRING, defaultValue: ''},
    }
)

const Language = sequelize.define('language',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title: {type: DataTypes.STRING, allowNull: false},
            proficiency: {type: DataTypes.STRING, allowNull: false}
    }
)

const Skills = sequelize.define('skills',
    {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title: {type: DataTypes.STRING, defaultValue: ''},
            last_used: {type: DataTypes.STRING, defaultValue: ''},
            experience: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
            proficiency: {type: DataTypes.STRING, defaultValue: ''}
    }
)


User.hasMany(Category)
Category.belongsTo(User)

User.hasMany(Organisation)
Organisation.belongsTo(User)

User.hasMany(PostJob)
PostJob.belongsTo(User)

User.hasMany(Resume)
Resume.belongsTo(User)

User.hasOne(Profile)
Profile.belongsTo(User)

Resume.hasMany(Skills, {as: 'skills'})
Skills.belongsTo(User)

Resume.hasMany(Language, {as: 'langs'})
Language.belongsTo(User)

Resume.hasMany(Education, {as: 'edus'})
Education.belongsTo(User)

module.exports = {
    User,
    Category,
    Organisation,
    PostJob,
    Resume,
    Profile,
    Skills,
    Language,
    Education
}