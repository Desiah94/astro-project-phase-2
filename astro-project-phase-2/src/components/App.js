import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import ZodiacSign from './ZodiacSign';
import Subscription from './Subscription';
import SearchBar from './SearchBar';
import CommentSection from './CommentSection';

const App = () => {
  const [zodiacData, setZodiacData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = async () => {
    try {
      const response = await fetch('http://localhost:3000/comments');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const postComment = async () => {
    try {
      const response = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newComment }),
      });
      const data = await response.json();
      console.log('Response from posting comment:', data);
      fetchComments();
      setNewComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setZodiacData(data.zodiacSigns));
    fetchComments();
  }, []);

  const filteredZodiacData = searchTerm
    ? zodiacData.filter(zodiac =>
        zodiac.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : zodiacData;

  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/subscription">Subscription</Link> |{" "}
          <Link to="/comments">Comments</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />
              <ZodiacSign zodiacSigns={filteredZodiacData} />
            </>
          } />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/comments" element={
            <CommentSection
              comments={comments}
              newComment={newComment}
              onNewCommentChange={setNewComment}
              onPostComment={postComment}
            />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
