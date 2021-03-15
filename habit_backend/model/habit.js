import mongoose from "mongoose";

var habitSchema = new mongoose.Schema({
  habit: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  completed: Boolean,
  creator: String,
});

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
