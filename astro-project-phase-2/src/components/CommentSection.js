import React, { useState } from 'react';
import { fetchData } from './DataService';

const CommentSection = ({ sign }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submitting comment to the database
    console.log('Comment submitted:', comment);
    setComment('');
  };

  const handleOnClick = () => {
    // Add your onClick logic here
    alert('You clicked on the Comment Section.');
  };
  const fetchDataFromJson = async () => {
    const data = await fetchData();
    // Use the data as needed in your component
  };
  
  
  return (
    <div onClick={handleOnClick}>
      <h2>Comments for {sign}</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {/* Display comments from the database */}
    </div>
  );
}

export default CommentSection;
