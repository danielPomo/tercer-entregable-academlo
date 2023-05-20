const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Todos = db.define('todos', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    usersId: {
        type: DataTypes.INTEGER,
        field: 'users_id',
        allowNull: true
    },
    categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'categories_id'
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})

module.exports = Todos