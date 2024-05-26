import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ddd' }}>
    <span>{user.name}</span>
    <div>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  </div>
);

export default UserItem;
