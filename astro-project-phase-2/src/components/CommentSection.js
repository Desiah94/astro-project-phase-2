import React, { useState, useEffect } from 'react';

const CommentSection = ({ zodiacSign }) => {
const [comment, setComment] = useState('');
const [comments, setComments] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  fetch(`http://localhost:3000/comments?zodiacSign=${zodiacSign}`)
    .then(response => response.json())
    .then(data => {
      setComments(data);
    })
    .catch(error => {
      
      setError(error);
    });
}, [zodiacSign]); 

const handleAddComment = () => {
  fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment, zodiacSign })
  })
    .then(response => response.json())
    .then(newComment => {
      
      setComments([...comments, newComment]);
      setComment('');
    })
    .catch(error => {
      
      setError(error);
    });
};

const handleSubmit = (e) => {
  e.preventDefault(); 
  handleAddComment();
};

return (
  <div>
    <h3>{zodiacSign} - Comments</h3>
    {error && <p>Error fetching comments: {error.message}</p>}
    <ul>
      {comments.map((commentData, index) => (
        <li key={index}>{commentData.comment}</li>
      ))}
    </ul>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  </div>
);
}

export default CommentSection;
