# ✅ Todo List (React Task Manager)

A clean, modern, and user-friendly **Task Manager** built with **React**, **Vite**, and **Tailwind CSS**.

This application helps users organize their daily tasks with features like task creation, editing, deletion, completion tracking, local storage persistence, and smart UI controls to prevent accidental data loss.

---

## ✨ Features

### ➕ Add Tasks
- Create new tasks instantly.
- Prevents adding empty or whitespace-only tasks.
- Save button is automatically disabled when the input field is empty.

### ✏️ Edit Tasks
- Edit any existing task.
- Loads the selected task into the input field for modification.
- Prevents editing another task until the current task is saved.

### 🗑️ Delete Tasks
- Delete tasks with a single click.
- Displays a confirmation dialog before deleting a task.

### ✅ Mark Tasks as Completed
- Mark tasks as completed using a checkbox.
- Completed tasks are visually distinguished with different styling.
- Confirmation dialog appears before unchecking a completed task.

### 👀 Show / Hide Completed Tasks
- Toggle the visibility of completed tasks.
- Helps keep the workspace clean and focused.

### 💾 Persistent Storage
- Tasks are automatically stored in the browser using **localStorage**.
- Tasks remain available even after refreshing or reopening the browser.

### 🔒 Smart UI Protection
- Edit, Delete, and Checkbox controls are disabled while typing a task.
- Prevents accidental changes or data loss during editing.

---

# 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- React Icons
- UUID
- Browser Local Storage

---

# 📦 Dependencies

```bash
react
vite
tailwindcss
react-icons
uuid
```

Install dependencies:

```bash
npm install
```

Install UUID (if needed):

```bash
npm install uuid
```

---

# 📁 Project Structure

```
TodoList-App/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   └── logo.svg
│   │
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── favicon.svg
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/mohd-shoaib28/TodoList-App.git
```

Navigate to the project directory

```bash
cd TodoList-App
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

# 💡 React Concepts Used

This project demonstrates:

- Functional Components
- React Hooks
  - `useState`
  - `useEffect`
- Controlled Components
- Event Handling
- Conditional Rendering
- State Management
- Local Storage Integration
- Immutable State Updates
- Array Methods
  - `map()`
  - `filter()`
  - `findIndex()`

---

# 🔄 Application Workflow

1. Load tasks from **localStorage** when the application starts.
2. Add a new task using the input field.
3. Save the task with a unique UUID.
4. Edit, delete, or mark tasks as completed.
5. Every update is immediately saved to **localStorage**.
6. Filter completed tasks using the "Show Finished Tasks" option.

---

# 📚 Key Functionalities

- Task validation
- UUID-based unique IDs
- Local storage synchronization
- Confirmation dialogs
- Dynamic task filtering
- Automatic UI state management
- Disabled controls while editing

---

# 🔮 Future Improvements

- 🌙 Dark Mode
- 📅 Due Dates
- ⭐ Task Priority
- 🔍 Search Tasks
- 📊 Task Statistics
- 🔔 Notifications
- ☁️ Firebase / MongoDB Integration
- 👤 User Authentication
- 📱 Progressive Web App (PWA)

---

# 👨‍💻 Author

**Mohd Shoaib**

If you found this project helpful, consider giving it a ⭐ on GitHub!