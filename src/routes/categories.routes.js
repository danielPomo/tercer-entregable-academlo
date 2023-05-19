const {Router} = require('express')
const router = Router()
const {createCategory} = require('../controllers/categories.controller')

router.post("/categories", createCategory)

module.exports = router

