import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Management System</h1>
        <TaskForm />
        <TaskList />
        {}
      </div>
    </TaskProvider>
  );
}

export default App;
