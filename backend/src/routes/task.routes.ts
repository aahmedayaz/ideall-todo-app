import express from "express";
import { getAllTasks, createNewTask, getTaskById, updateTaskById, deleteTaskById } from "../controllers/task.controller";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:taskId", getTaskById);
router.delete("/:taskId", deleteTaskById);
router.post("/", createNewTask);
router.put("/:taskId", updateTaskById);

export default router;
