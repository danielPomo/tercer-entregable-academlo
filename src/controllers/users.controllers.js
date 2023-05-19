const Users = require('../models/users.model')

const createUser = async (req, res) => {
    try {
        const {username, email, password} = req.body
        await Users.create({username, email, password})
        res.status(201).send() 
    } catch (error) {
        res.status(400).json(error)
    }
}

const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll()
        res.json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {createUser, getUsers}