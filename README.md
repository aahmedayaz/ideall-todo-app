# Ideal ToDo App

This is a full-stack ToDo web application built with the MERN stack, Next.js, and TypeScript. The application allows users to create, read, update, and delete tasks, view task details, and reorder tasks using drag-and-drop functionality.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [License](#license)

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

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd E:\GitHub\Ayaz Github\ideall-todo-app\frontend
   ```

2. **Install the required packages:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd E:\GitHub\Ayaz Github\ideall-todo-app\backend
   ```

2. **Create a `.env` file** in the backend directory with the following content:
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

## Running the Application

After setting up both the frontend and backend, the application will be accessible in your web browser at:
```
http://localhost:3000
```
The backend API will be running at:
```
http://localhost:5000
```

## Usage

- Users can create new tasks by entering a title and description.
- Users can view task details by clicking on any task in the list.
- Tasks can be marked as complete using the checkbox.
- Users can delete tasks and reorder them using drag-and-drop functionality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
