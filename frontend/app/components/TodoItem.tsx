import { useDispatch, useSelector } from "react-redux";
import { IconButton, Checkbox, ListItem, Typography } from "@mui/material";
import { MdDelete } from "react-icons/md";
import * as todoService from "../services/todoService";
import { removeTodo, setTodos } from "../lib/features/todos/todoSlice";
import { RootState } from "../lib/store";
import { toast } from "react-toastify";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { useRef } from "react";

interface Todo {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface TodoItemProps {
  todo: Todo;
  index: number;
  moveTodo: (a: any, b: any) => void
}

const ItemTypes = {
  TODO: "todo",
};


const TodoItem = ({ todo, index, moveTodo }: TodoItemProps) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const ref = useRef<HTMLLIElement | null>(null); // Create a ref using useRef

  const handleToggleTodo = async (todo: Todo) => {
    try {
      const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
      await todoService.updateTodoStatus(todo._id, updatedTodo);
      dispatch(setTodos(todos.map((t) => (t._id === todo._id ? updatedTodo : t))));
      toast.success("Todo updated!");
    } catch (error) {
      toast.error("Failed to update todo.");
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await todoService.deleteTodo(id);
      dispatch(removeTodo(id));
      toast.success("Task deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete task.");
    }
  };

  const [, drop] = useDrop({
    accept: ItemTypes.TODO,
    hover(item: any) {
      if (item.index !== index) {
        moveTodo(item.index, index);
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TODO,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <ListItem
      ref={ref}
      className="flex justify-between items-center px-4 rounded-lg shadow-md border border-gray-600 h-[50px]"
      style={{
        cursor: isDragging ? "grabbing" : "grab",
      }}
      key={index}
    >
      <div className="flex gap-2">
        <Checkbox
          checked={todo.isCompleted}
          onChange={(e) => handleToggleTodo(todo)}
          className="text-white"
        />
        <div className="flex flex-col justify-center">
          <div className="flex gap-4">
            <Typography variant="h6" className="text-white text-xs">{todo.title}</Typography>
            <Typography variant="h6" className={`text-white text-[10px] border-none rounded-2xl flex justify-center items-center px-3 ${todo.isCompleted ? "bg-green-700 text-white" : "bg-[#ff3b3b] text-white"}`}>{todo.isCompleted ? "Completed" : "Not Completed"}</Typography>
          </div>
          <Typography variant="subtitle1" className="text-gray-400 text-[8px]">{todo.description}</Typography>
        </div>
      </div>
      <IconButton onClick={() => handleDeleteTodo(todo._id)}>
        <MdDelete className="text-red-600" />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
