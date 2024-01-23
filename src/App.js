import React from 'react';
import User from './User';
import Comment from './Comment';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="user-container">
        <User />
      </div>
      <div className="comment-container">
        <Comment />
      </div>
    </div>
  );
};

export default App;
