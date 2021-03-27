import mongoose from "mongoose";

var habitSchema = new mongoose.Schema({
  habit: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  completed: Boolean,
  creator: String,
  time: String,
  streak: {
    type: Number,
    default: 0,
  },
  streakDate: Date,
  prevDate: {
    type: Date,
    default: new Date(),
  },
});

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
