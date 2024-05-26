import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleAddOrUpdateUser = (user) => {
    if (userToEdit) {
      setUsers(users.map(u => (u.id === user.id ? user : u)));
      setUserToEdit(null);
    } else {
      setUsers([...users, user]);
    }
  };

  const handleEditUser = (user) => {
    setUserToEdit(user);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm onSubmit={handleAddOrUpdateUser} userToEdit={userToEdit} />
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
}

export default App;
