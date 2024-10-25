"use client";

import Todos from "../components/Todo";

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setTodos, addTodo, removeTodo } from "../lib/features/todos/todoSlice";
// import axios from "axios";
// import {
//   TextField,
//   Checkbox,
//   Button,
//   List,
//   ListItem,
//   Typography,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import { MdDelete } from "react-icons/md";
// import { useDrag, useDrop, DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ItemTypes = {
//   TODO: "todo",
// };

// const TodoItem = ({ todo, index, moveTodo, handleDeleteTodo }) => {
//   const [, ref] = useDrop({
//     accept: ItemTypes.TODO,
//     hover(item) {
//       if (item.index !== index) {
//         moveTodo(item.index, index);
//         item.index = index;
//       }
//     },
//   });

//   const [{ isDragging }, drag] = useDrag({
//     type: ItemTypes.TODO,
//     item: { index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos);

//   const handleToggleTodo = async (todo) => {
//     try {
//       // Create a new todo object with the updated `isCompleted` value
//       const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
  
//       // Update the status in the backend
//       await axios.put(`http://localhost:5000/api/tasks/${todo._id}`, updatedTodo);
  
//       // Dispatch an action to update the state in the Redux store
//       const updatedTodos = todos.map((t) => (t._id === todo._id ? updatedTodo : t));
//       dispatch(setTodos(updatedTodos));
//       toast.success(`Task marked as ${updatedTodo.isCompleted ? "completed" : "not completed"}!`);
//     } catch (error) {
//       console.error("Failed to update todo:", error);
//       toast.error("Failed to update task.");
//     }
//   };

//   return (
//     <ListItem
//       ref={(node) => ref(drag(node))}
//       className="flex justify-between items-center px-4 rounded-lg shadow-md border border-gray-600"
//       style={{
//         cursor: isDragging ? "grabbing" : "grab", // Changes cursor while dragging
//       }}
//     >
//       <div className="flex gap-2">
//         <Checkbox
//           checked={todo.isCompleted}
//           onChange={(e) => handleToggleTodo(todo)}
//           className="text-white"
//         />
//         <div className="">
//           <div className="flex gap-4">
//             <Typography variant="h6" className="text-white text-sm">{todo.title}</Typography>
//             <Typography variant="h6" className={`text-white text-xs border-none rounded-2xl flex justify-center items-center px-3 ${todo.isCompleted ? "bg-green-700 text-white" : "bg-[#ff3b3b] text-white"}`}>{todo.isCompleted ? "Completed" : "Not Completed"}</Typography>
//           </div>
//           <Typography variant="subtitle1" className="text-gray-400 text-xs">{todo.description}</Typography>
//         </div>
//       </div>
//       <IconButton onClick={() => handleDeleteTodo(todo._id)}>
//         <MdDelete className="text-red-600" />
//       </IconButton>
//     </ListItem>
//   );
// };

// const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos);
//   const [newTodo, setNewTodo] = useState("");
//   const [description, setDescription] = useState("");
//   const [isCompleted, setIsCompleted] = useState(false);


//   useEffect(() => {
//     console.log("UseEffect isCompleted: " , isCompleted)
//   }, [isCompleted])

//   const handleAddTodo = async () => {
//     if (newTodo.trim() === "" || description.trim() === "") {
//       toast.error("Title and description are required!");
//       return;
//     }
//     try {
//       console.log("title : ", newTodo)
//       console.log("description : ", description)
//       console.log("isCompleted : ", isCompleted)
//       const response = await axios.post("http://localhost:5000/api/tasks", {
//         title: newTodo,
//         description,
//         isCompleted: isCompleted,
//       });
//       dispatch(addTodo(response.data.data));
//       setNewTodo("");
//       setDescription("");
//       toast.success("Task added successfully!");
//     } catch (error) {
//       console.error("Failed to add todo:", error);
//       oast.error("Failed to add task.");
//     }
//   };

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/tasks");
//       dispatch(setTodos(response.data.data));
//       toast.success("Todos fetched successfully!");
//     } catch (error) {
//       console.error("Failed to fetch todos:", error);
//       toast.error("Failed to fetch todos.");
//     }
//   };

//   const handleDeleteTodo = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/tasks/${id}`);
//       dispatch(removeTodo(id));
//       toast.success("Task deleted successfully!");
//     } catch (error) {
//       console.error("Failed to delete todo:", error);
//       toast.error("Failed to delete task.");
//     }
//     fetchTodos()
//   };

//   const moveTodo = (fromIndex, toIndex) => {
//     const updatedTodos = [...todos];
//     const [movedTodo] = updatedTodos.splice(fromIndex, 1);
//     updatedTodos.splice(toIndex, 0, movedTodo);
//     dispatch(setTodos(updatedTodos));
//   };


//   useEffect(() => {
//     console.log("I am Rendered")
//     fetchTodos();
//   }, [dispatch]);

//   return (
//     <div className="flex justify-center items-center px-6 py-3 w-[100%] z-30">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="w-full max-w-[600px] bg-[#2a2a2a] p-8 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold text-center text-[#0fab48] mb-8">Todo App</h1>

//         <div className="space-y-4 mb-8">
//           <TextField
//             label="Title"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             className="bg-[#3e3e3e] text-white rounded-xl border-none outline-none"
//             InputLabelProps={{ style: { color: "white" } }}
//             InputProps={{
//               style: { color: "white" },
//             }}
//           />
//           <TextField
//             label="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             className="bg-[#3e3e3e] text-white rounded-xl border-none outline-none"
//             InputLabelProps={{ style: { color: "white" } }}
//             InputProps={{
//               style: { color: "white" },
//             }}
//           />
//           <div className="flex items-center">
//             <Checkbox
//               checked={isCompleted}
//               onChange={(e) => setIsCompleted(e.target.checked)}
//               className="text-white"
//             />
//             <p className="text-white">Completed</p>
//           </div>
//           <Button
//             onClick={handleAddTodo}
//             variant="contained"
//             // color="primary"
//             className="w-full bg-[#0fab48] hover:bg-[#227440] text-white py-2 px-4 rounded-md"
//           >
//             Add Todo
//           </Button>
//         </div>

//         <div className="overflow-y-scroll h-[280px]">
//           <DndProvider backend={HTML5Backend} >
//             <List className="space-y-3">
//               {todos.map((todo, index) => (
//                 <TodoItem
//                   key={todo._id}
//                   todo={todo}
//                   index={index}
//                   moveTodo={moveTodo}
//                   handleDeleteTodo={handleDeleteTodo}
//                 />
//               ))}
//             </List>
//           </DndProvider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todos;


const page: React.FC = () => {
  return (
    <Todos/>
  );
}

export default page;
