# To-Do List Application

This project is a simple to-do list application built with React. The application allows users to add, edit, delete, and filter tasks. Tasks are saved to local storage to persist across page reloads.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Testing Guidance

### Prerequisites
- Ensure you have Node.js and npm installed on your machine.

### Installation
- Clone the repository:<br />
git clone https://github.com/yourusername/todo-app.git

- Navigate to the project directory:<br />
cd todo-app

- Install the dependencies:<br />
npm install

### Running the Application
- To start the application, run:<br />
npm run dev

- This will open the application in your default web browser.

### Testing the Application
#### Initial Load
- Open the application in your browser.
- Verify that any previously saved tasks from local storage are loaded and displayed.
#### Adding Tasks
- Enter a task in the input field.
- Click the "Save" button.
- Verify that the new task appears in the list below.
#### Editing Tasks
- Click the edit button (pencil icon) next to a task.
- The task should reappear in the input field for editing.
- Make changes to the task and click "Save".
- Verify that the task is updated in the list.
#### Deleting Tasks
- Click the delete button (trash icon) next to a task.
- Verify that the task is removed from the list.
#### Marking Tasks as Completed
- Click the checkbox next to a task to mark it as completed.
- Verify that the task text is struck through, indicating completion.
#### Filtering Tasks
- Use the filter buttons ("All", "Active", "Completed") to switch between different views.
- Verify that only tasks matching the selected filter are displayed.

  
