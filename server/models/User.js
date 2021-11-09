const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt);
    }
}

User.init({
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    salt: {
        type: Sequelize.STRING
    }

}, { sequelize, 
    timestamps: false,
    modelName: "user", 
})

User.beforeCreate((user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, salt);
      })
      .then((hash) => {
        user.password = hash;
      });
});

module.exports = User