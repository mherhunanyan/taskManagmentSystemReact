import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map(task => <Task key={task.taskId} {...task} />)
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
