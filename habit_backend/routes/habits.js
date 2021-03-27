import express from "express";
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  habitStreak,
} from "../controllers/habits.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getHabits);
router.post("/", auth, createHabit);
router.patch("/:id", auth, updateHabit);
router.delete("/:id", auth, deleteHabit);
router.patch("/streak/:id", auth, habitStreak);

export default router;
