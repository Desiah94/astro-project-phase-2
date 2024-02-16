import React, { useState, useEffect } from 'react';

const CommentSection = ({ zodiacSign }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch comments for the specific zodiac sign when the component mounts
    fetch(`http://localhost:3000/comments?zodiacSign=${zodiacSign}`)
      .then(response => response.json())
      .then(data => {
        // Update state with the fetched comments
        setComments(data);
      })
      .catch(error => {
        // Handle errors
        setError(error);
      });
  }, [zodiacSign]); // Include zodiacSign in the dependency array to re-fetch comments when it changes

  const handleAddComment = () => {
    // Send a POST request to add a new comment for the specific zodiac sign
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment, zodiacSign })
    })
      .then(response => response.json())
      .then(newComment => {
        // Update state with the new comment
        setComments([...comments, newComment]);
        setComment('');
      })
      .catch(error => {
        // Handle errors
        setError(error);
      });
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
      <div>
        <input
          type="text"
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}

export default CommentSection;
