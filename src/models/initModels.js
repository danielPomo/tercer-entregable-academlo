const Users = require('./users.model')
const Todos = require('./todos.model')
const Categories = require('./categories.model')

const initModels = () => {
    Todos.belongsTo(Users, {foreignKey: 'usersId'})
    Users.hasMany(Todos, {foreignKey: 'usersId'})
    Todos.belongsTo(Categories, {foreignKey: 'categoriesId'})
    Categories.hasMany(Todos, {foreignKey: 'categoriesId'})
}

module.exports = initModels