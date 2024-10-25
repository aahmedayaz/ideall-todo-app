import axios from "axios";

interface Todo {
  title: string;
  description: string;
  isCompleted: boolean;
}

export const fetchTodos = async () => {
  const response = await axios.get("http://localhost:5000/api/tasks");
  return response.data.data;
};

export const addTodo = async (todo: Todo) => {
  const response = await axios.post("http://localhost:5000/api/tasks", todo);
  return response.data.data;
};

export const updateTodoStatus = async (id: string, todo: Todo) => {
  await axios.put(`http://localhost:5000/api/tasks/${id}`, todo);
};

export const deleteTodo = async (id: string) => {
  await axios.delete(`http://localhost:5000/api/tasks/${id}`);
};
