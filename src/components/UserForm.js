import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, userToEdit }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onSubmit({ id: userToEdit ? userToEdit.id : Date.now(), name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        style={{ marginRight: '10px' }}
      />
      <button type="submit">{userToEdit ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
