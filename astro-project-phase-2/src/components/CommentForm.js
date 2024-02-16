// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newComment.trim()) return; // Prevent submitting empty comments
    addComment(newComment);
    setNewComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a new comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
