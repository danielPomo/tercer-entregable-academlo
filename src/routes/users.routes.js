const {Router} = require('express')
const router = Router()
const {createUser} = require('../controllers/users.controllers')

router.post("/users", createUser)

module.exports = router