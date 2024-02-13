// CommentSection.js
import React, { useState } from 'react';
import { fetchData } from './DataService';

const CommentSection = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    // Here you can perform any actions related to submitting a comment,
    // such as sending it to a server or updating the state.
    // For now, let's just display an alert when a comment is posted.
    alert('Your comment has been posted!');
    // Clear the input field after submitting the comment
    setNewComment('');
  };
  const fetchDataFromJson = async () => {
    const data = await fetchData();
    // Use the data as needed in your component
  };
  
  
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <div>
        <textarea
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Write your comment here..."
        ></textarea>
        <br />
        <button onClick={handleCommentSubmit}>Post Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
