import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice'

export default  function UserController() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Select User</h2>

      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">-- Select --</option>
        {data.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && (
        <p>Selected User ID: {selectedUser}</p>
      )}
    </div>
  );
}

