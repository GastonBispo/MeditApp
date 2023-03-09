import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;