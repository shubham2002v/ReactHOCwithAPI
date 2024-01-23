import React from 'react';
import HOC from './HOC';

const Comment = ({ data }) => {
  return (
    <div>
      {data.map((comment) => (
        <p key={comment.id}>{comment.body}</p>
      ))}
    </div>
  );
}

export default HOC(Comment, 'comments');
