import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import Task, { ITask } from "../models/task.model";
import ApiResponse from "../utils/apiResponse";
import ApiError from "../utils/apiError";

// Get all tasks
export const getAllTasks = asyncHandler(async (req: Request, res: Response) => {
  const tasks: ITask[] = await Task.find();
  res
    .status(200)
    .json(new ApiResponse(200, tasks, "Tasks retrieved successfully"));
});

// Create a new task
export const createNewTask = asyncHandler(
  async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    const savedTask = await newTask.save();
    res
      .status(201)
      .json(new ApiResponse(201, savedTask, "Task created successfully"));
  }
);

// Get a specific task by ID
export const getTaskById = asyncHandler(async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.taskId);
  if (!task) {
    throw new ApiError("Task not found", 404);
  }
  res
    .status(200)
    .json(new ApiResponse(200, task, "Task retrieved successfully"));
});

// Update a task by ID
export const updateTaskById = asyncHandler(
  async (req: Request, res: Response) => {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      throw new ApiError("Task not found", 404);
    }
    res
      .status(200)
      .json(new ApiResponse(200, updatedTask, "Task updated successfully"));
  }
);

// Delete a task by ID
export const deleteTaskById = asyncHandler(
  async (req: Request, res: Response) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.taskId);
    if (!deletedTask) {
      throw new ApiError("Task not found", 404);
    }
    res
      .status(200)
      .json(new ApiResponse(200, null, "Task deleted successfully"));
  }
);
