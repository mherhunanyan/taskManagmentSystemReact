import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState({
    taskId: '',
    title: '',
    description: '',
    deadline: '',
    status: ''
});

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', description: '', deadline: '', status: '' }); // Reset the form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={task.status}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
