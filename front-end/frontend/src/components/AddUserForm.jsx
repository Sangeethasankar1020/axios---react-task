// frontend/src/components/AddUserForm.jsx
import React, { useState } from 'react';
import { createUser } from '../api';
import '../App.css'

const AddUserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { name, email, age: parseInt(age) };
      await createUser(userData);
      setName('');
      setEmail('');
      setAge('');
      onUserAdded();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
