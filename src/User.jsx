import React from 'react';
import HOC from './HOC';

const User = ({ data }) => {
  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
}

export default HOC(User, 'users');
