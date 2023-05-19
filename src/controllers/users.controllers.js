const Users = require('../models/users.model')

const createUser = async (req, res) => {
    try {
        const userToCreate = req.body
        await Users.create(userToCreate)
        res.status(201).send() 
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {createUser}