const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Users = db.define('users', {
    username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(10),
        allowNull: false,
    }
}, {
    timestamps: true,
    updatedAt: false,
    createdAt: 'created_at'
})

module.exports = Users