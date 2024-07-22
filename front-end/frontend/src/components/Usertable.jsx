import React, { useEffect, useState } from 'react';
import { getUsers } from '../api';
import AddUserForm from './AddUserForm';
import '../App.css'


const UserTable = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      console.log('Fetched users:', response.data); // Add this line
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='main'>
      <AddUserForm onUserAdded={fetchUsers} />
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
