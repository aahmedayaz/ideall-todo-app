import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, TextField } from "@mui/material";
import { addTodo } from "../lib/features/todos/todoSlice";
import * as todoService from "../services/todoService";
import { toast } from "react-toastify";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleAddTodo = async () => {
    if (!newTodo || !description) {
      toast.error("Title and description are required!");
      return;
    }
    try {
      const todo = await todoService.addTodo({
        title: newTodo,
        description,
        isCompleted,
      });
      dispatch(addTodo(todo));
      setNewTodo("");
      setDescription("");
      toast.success("Task added successfully!");
    } catch (error) {
      console.error("Failed to add todo:", error);
      toast.error("Failed to add task.");
    }
  };

  return (
    <div className="space-y-4 mb-8">
      <TextField
        label="Title"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        variant="outlined"
        fullWidth
        className="bg-[#3e3e3e] text-white rounded-xl border-none outline-none"
        InputLabelProps={{
          style: {
            color: "white",
            fontSize: "0.8rem", 
          },
        }}
        InputProps={{
          style: {
            color: "white",
            fontSize: "0.8rem",
          },
        }}
      />

      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        fullWidth
        className="bg-[#3e3e3e] text-white rounded-xl border-none outline-none"
        InputLabelProps={{
          style: {
            color: "white",
            fontSize: "0.8rem", 
          },
        }}
        InputProps={{
          style: {
            color: "white",
            fontSize: "0.8rem",
          },
        }}
      />
      <div className="flex items-center">
        <Checkbox checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} className="text-white"/>
        <p className="text-white text-sm">Completed</p>
      </div>
      <Button onClick={handleAddTodo} className="w-full bg-[#0fab48] text-white text-xs">
        Add Todo
      </Button>
    </div>
  );
};

export default AddTodoForm;
