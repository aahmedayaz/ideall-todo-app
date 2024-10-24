# Ideal ToDo App

This is a full-stack ToDo web application built with the MERN stack, Next.js, and TypeScript. The application allows users to create, read, update, and delete tasks, view task details, and reorder tasks using drag-and-drop functionality.

<img width="960" alt="Homepage" src="https://github.com/user-attachments/assets/99bc4f7c-f604-4b3e-81c5-d55f542bc7c0">
<img width="960" alt="Todo App" src="https://github.com/user-attachments/assets/718f894c-fceb-45dc-939c-88609b45dc11">



## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Frontend Routes](#frontend-routes)
- [Backend Routes](#backend-routes)

## Technologies Used

- **Frontend:**
  - Next.js
  - React
  - Redux Toolkit
  - Axios
  - Material-UI

- **Backend:**
  - Node.js
  - Express
  - TypeScript
  - Mongoose
  - MongoDB

## Setup Instructions


### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd \ideall-todo-app\backend
   ```


$${\color{red}🔴 I  \space haven't  \space mentioned  \space my  \space .env  \space file  \space in  \space the  \space gitignore}$$


2. **Use my .env file, or if you want to use your file, then delete the existing .env file from the backend directory & Create a new `.env` file** in the backend directory with your own MONGODB_URI and PORT:
   ```env
   MONGODB_URI=mongodb://<username>:<password>@localhost:27017/yourdbname
   PORT=5000
   ```

   Replace `<username>`, `<password>`, and `yourdbname` with your MongoDB credentials and database name.

3. **Install the required packages:**
   ```bash
   npm install
   ```

4. **Start the backend server:**
   ```bash
   npm run start
   ```



### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   \ideall-todo-app\frontend
   ```

2. **Install the required packages:**
   ```bash
   npm install --force
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Running the Application

After setting up both the frontend and backend, the frontend of your application will be accessible in your web browser at:
```
http://localhost:3000
```
The backend API will be running at:
```
http://localhost:5000
```

## Frontend Routes
  - http://localhost:3000 ( Homepage )
  - http://localhost:3000/tasks ( It contains the Todo App )

## Backend Routes
  - GET: http://localhost:5000/api/tasks ( Get all Tasks )
  - GET: http://localhost:5000/api/tasks/{here add task id} ( Get a single task )
  - POST: http://localhost:5000/api/tasks ( Add a task )
  - DELETE: http://localhost:5000/api/tasks/{here add task id} ( Delete a single task )
  - PUT: http://localhost:5000/api/tasks/{here add task id} ( update a single task )
