import express from "express";
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
} from "../controllers/habits.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getHabits);
router.post("/", auth, createHabit);
router.patch("/:id", auth, updateHabit);
router.delete("/:id", auth, deleteHabit);

export default router;
