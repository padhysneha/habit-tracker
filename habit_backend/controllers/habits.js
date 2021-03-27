import Habit from "../model/habit.js";
import mongoose from "mongoose";
import moment from "moment";

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
  const newHabit = new Habit({
    ...habit,
    creator: req.userId,
    createdAt: new Date().toISOString(),
    time: req.body.time,
  });

  try {
    await newHabit.save();
    console.log(newHabit);
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

export const habitStreak = async (req, res) => {
  const isCompleted = req.body.completed;
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No habit with that id");
  }
  const habit = await Habit.findById(_id);
  if (isCompleted) {
    habit.completed = true;
    habit.streakDate = moment();
    const newPrevDate = moment(habit.prevDate);
    const diffDate = habit.streakDate - newPrevDate;
    const TOTAL_MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
    // console.log(Math.floor(diffDate / TOTAL_MILLISECONDS_IN_A_DAY));
    if (Math.floor(diffDate / TOTAL_MILLISECONDS_IN_A_DAY) > 1) {
      habit.streak = 1;
      habit.prevDate = new Date();
      habit.save();
    } else {
      habit.streak = habit.streak + 1;
      habit.prevDate = new Date();
      habit.save();
    }
  } else {
    habit.completed = false;
    const date = moment(habit.streakDate);
    const todaysDate = moment();
    const diffDate = todaysDate - date;
    const TOTAL_MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
    console.log(date);
    console.log(todaysDate, "todays");
    console.log(diffDate);
    console.log("false ", Math.floor(diffDate / TOTAL_MILLISECONDS_IN_A_DAY));
    if (Math.floor(diffDate / TOTAL_MILLISECONDS_IN_A_DAY) > 1) {
      habit.streak = 0;
    }
    habit.save();
  }

  res.status(201).json(habit);
};
