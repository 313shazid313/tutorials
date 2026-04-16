import mongoose from "mongoose";

const Todos = new mongoose.Schema({
  task: { type: String, required: true },
  complete: { type: Boolean, default: false },
});

export default mongoose.model("Todo", Todos);
