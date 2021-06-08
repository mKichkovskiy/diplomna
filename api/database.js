const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DATA_NAME,
    process.env.DATA_USER,
    process.env.DATA_PASS,
    {
        dialect: 'postgres',
        host: process.env.DATA_HOST,
        port: process.env.DATA_PORT
    }
)