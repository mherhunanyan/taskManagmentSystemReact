import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ commentId, author, content }) => {
  return (
    <div className="comment">
      <strong>{author}</strong> {}
      <p>{content}</p>
    </div>
  );
};

Comment.propTypes = {
  commentId: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Comment;
