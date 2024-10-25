"use client";

import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer, toast } from "react-toastify";
import { setTodos } from "../lib/features/todos/todoSlice";
import { RootState } from "../lib/store";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import * as todoService from "../services/todoService";
import "react-toastify/dist/ReactToastify.css";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await todoService.fetchTodos();
        dispatch(setTodos(fetchedTodos));
        toast.success("Todos fetched successfully!");
      } catch (error) {
        console.error("Failed to fetch todos:", error);
        toast.error("Failed to fetch todos.");
      }
    };

    fetchTodos();
  }, [dispatch]);

  const moveTodo = (fromIndex, toIndex) => {
    const updatedTodos = [...todos];
    const [movedTodo] = updatedTodos.splice(fromIndex, 1);
    updatedTodos.splice(toIndex, 0, movedTodo);
    dispatch(setTodos(updatedTodos));
  };

  return (
    <div className="flex justify-center items-center px-6 py-3 w-[100%] z-30">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-[500px] bg-[#2a2a2a] p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-[#0fab48] mb-2">Todo App</h1>
        <AddTodoForm />
        <div className="overflow-y-scroll h-[180px]">
          <DndProvider backend={HTML5Backend}>
            {todos.map((todo, index) => (
              <Fragment key={index}>
                <TodoItem key={todo._id} todo={todo} index={index} moveTodo={moveTodo} />
              </Fragment>
            ))}
          </DndProvider>
        </div>
      </div>
    </div>
  );
};

export default Todos;
