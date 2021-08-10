const router = require("express").Router();

const createTodo = require("../controllers/todos");


router.post("/", createTodo);


module.exports = router;
