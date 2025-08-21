const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const { authenticate } = require("../middlewares/authMiddleware");

router.use(authenticate);

router.post("/", todoController.createTodo);
router.get("/", todoController.getTodos);
router.get("/:id", todoController.getTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
