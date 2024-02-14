import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Task = ({ taskId, title, description, deadline, creationDate, status, comments }) => {
  const [taskDetails, setTaskDetails] = useState({
    title,
    description,
    deadline,
    creationDate: creationDate || new Date().toISOString().split('T')[0], // Sets to current date if absent
    status: 'Pending',
    comments: comments || []
  });

  
  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  

  const handleAddComment = () => {
    const updatedComments = [
      ...taskDetails.comments,
      {
        commentId: taskDetails.comments.length + 1,
        author: newAuthor,
        content: newComment,
        date: new Date().toLocaleDateString()
      }
    ];
    setTaskDetails({ ...taskDetails, comments: updatedComments });
    setNewComment('');
    setNewAuthor('');
  };

  return (
    <div className="task">
      <h3>Task - {taskId}</h3>
      <p>Task ID: {taskId}</p>
      <p>Title: {taskDetails.title}</p>
      <p>Description: {taskDetails.description}</p>
      <p>Status: {status}</p>
      <p>CreationDate: {taskDetails.creationDate}</p>
      <p>Deadline: {taskDetails.deadline}</p> <br />
      {taskDetails.comments.map((comment, index) => (
        <div key={index}>
          <p>Comment: {index + 1}</p>
          <p>Author - {comment.author}</p>
          <p>Comment - {comment.content}</p>
          <p>Date - {comment.date}</p> <br />
        </div>
      ))}
      <input
        type="text"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
        placeholder="Author name"
      />
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

Task.propTypes = {
  index: PropTypes.number.isRequired,
  taskId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  deadline: PropTypes.string,
  creationDate: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      commentId: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      
    })
  )
};

export default Task;
