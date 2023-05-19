const {Router} = require('express')
const router = Router()
const {createUser, getUsers} = require('../controllers/users.controllers')

router.post("/users", createUser)
router.get("/users", getUsers)

module.exports = router