const { username, password } = require('../../untracked/dbConfigs.json')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sk8', username, password, {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false
})

module.exports = sequelize