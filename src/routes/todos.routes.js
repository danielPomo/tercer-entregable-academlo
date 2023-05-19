const {Router} = require('express')
const router = Router()
const {createTodos, getTodosByUserId, toggleCompletedAttributeOfTodos, deleteTodos} = require('../controllers/todos.controllers')

router.post("/todos", createTodos)
router.get("/todos/users/:id", getTodosByUserId)
router.put("/users/:userId/todos/:todoId", toggleCompletedAttributeOfTodos)
router.delete("/users/:userId/todos/:todoId", deleteTodos)

module.exports = router