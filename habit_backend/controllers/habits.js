import Habit from "../model/habit.js";
import mongoose from "mongoose";

export const getHabits = async (req, res) => {
  try {
    const Habits = await Habit.find();
    res.status(200).json(Habits);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createHabit = async (req, res) => {
  const habit = req.body;
  const newHabit = new Habit(habit);

  try {
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateHabit = async (req, res) => {
  const { id: _id } = req.params;
  const habit = req.body; //updated habit
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No habit with that id");
  }
  const updatedHabit = await Habit.findByIdAndUpdate(
    _id,
    { ...habit, _id },
    {
      new: true,
    }
  ); //new should be true so that we can get the updated habit
  res.json(updatedHabit);
};

export const deleteHabit = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No habit with that id");
  }
  await Habit.findByIdAndDelete(_id);
  res.json({ message: "Habit deleted successfully" });
};
