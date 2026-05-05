import todoModel from "../model/todo.model.js";

const createTodo = async (req, res) => {
  try {
    const { task } = req.body;

    await todoModel.create({ task: task });

    return res.status(201).json({ message: "Task added successfully!", task });
  } catch (error) {
    console.log(error);
  }
};

const getTodo = async (req, res) => {
  try {
    const data = await todoModel.find();

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const targetTask = await todoModel.findById(id);

    if (!targetTask) {
      return res.status(200).json({ messsage: "item not found" });
    }
    await todoModel.deleteOne({ _id: id });
    return res.status(200).json("Task Deleated");
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const targetTask = await todoModel.findById(id);

    if (!targetTask) {
      return res.status(200).json({ messsage: "item not found" });
    }
    await todoModel.findByIdAndUpdate(id, { task: task });

    return res.status(201).json({ message: "updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

const completedTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { complete } = req.body;
    const targetTask = await todoModel.findById(id);

    if (!targetTask) {
      return res.status(200).json({ messsage: "item not found" });
    }
    await todoModel.findByIdAndUpdate(id, { complete: complete });
    return;
  } catch (error) {
    console.log(error);
  }
};

export default {
  completedTodo,
  createTodo,
  deleteTodo,
  updateTodo,
  getTodo,
};
