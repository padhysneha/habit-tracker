import express from "express";
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
} from "../controllers/habits.js";

const router = express.Router();

router.get("/", getHabits);
router.post("/", createHabit);
router.patch("/:id", updateHabit);
router.delete("/:id", deleteHabit);

export default router;
