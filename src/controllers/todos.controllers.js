const Todos = require('../models/todos.model')
const Categories = require('../models/categories.model')
const Users = require('../models/users.model')

const createTodos = async (req, res) => {
    try {
        const {title, usersId, categoriesId} = req.body
        await Todos.create({title, users_id: usersId, categoriesId:categoriesId})
        res.status(201).send() 
    } catch (error) {
        res.status(400).json(error)
    }
}

const getTodosByUserId = async (req, res) => {
    try {
        const {id} = req.params
        const todosByUser = await Todos.findAll({
            where: {
                users_id: id
            },
            attributes: {
                exclude: ['usersId', 'categoriesId']
            },
            include: [
                {
                    model: Categories,
                    attributes: ['name']
                },
                {
                    model: Users,
                    attributes: ['username']
                }
            ]
        })
        res.json(todosByUser)
    } catch (error) {
        res.status(400).json(error)
    }
}

const toggleCompletedAttributeOfTodos = async (req, res) => {
    try {
        const {userId, todoId} = req.params
        const {completed} = req.body
        const newCompletionValue = !completed
        await Todos.update(
            {completed: newCompletionValue},
            {where: {
                users_id: userId,
                id: todoId
            }}
        )
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTodos = async (req, res) => {
    try {
        const {userId, todoId} = req.params
        await Todos.destroy(
            {where: {
                users_id: userId,
                id: todoId
            }}
        )
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {createTodos, getTodosByUserId, toggleCompletedAttributeOfTodos, deleteTodos}