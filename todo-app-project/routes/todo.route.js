import express from "express";
import todoController from "../controller/todo.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("server is ok");
});

router.route("/all-tasks").get(todoController.getTodo);
router.route("/create-task").post(todoController.createTodo);
router.route("/update-task/:id").put(todoController.updateTodo);
router.route("/completed-task/:id").patch(todoController.completedTodo);
router.route("/delete-task/:id").delete(todoController.deleteTodo);

export default router;
