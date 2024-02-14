import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [nextTaskId, setNextTaskId] = useState(1);

  const addTask = (task) => {
    const newTask = { ...task, taskId: nextTaskId };
    setTasks([...tasks, { ...newTask, creationDate: new Date().toISOString().split('T')[0] }]);
    setNextTaskId(nextTaskId + 1);
  };

  const editTask = (taskId, updatedDetails) => {
    setTasks(tasks.map(task => task.taskId === taskId ? { ...task, ...updatedDetails } : task));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.taskId !== taskId));
  };

  

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
