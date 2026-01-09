
import React, { useEffect } from 'react';
import { useFetchData } from './ReactCoding/Memorization.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './Redux/userSlice.js';

export default function CardBoard() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.users);
  //const [selectedUser, setSelectedUser] = useState('');
  

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  console.log("data ",  data)

//  return (
//    <div style={{ padding: '20px' }}>
//      <h2>Select User</h2>
//
//      <select
//        value={selectedUser}
//        onChange={(e) => setSelectedUser(e.target.value)}
//      >
//        <option value="">-- Select --</option>
//        {data.map((user) => (
//          <option key={user.id} value={user.id}>
//            {user.name}
//          </option>
//        ))}
//      </select>
//
//      {selectedUser && (
//        <p>Selected User ID: {selectedUser}</p>
//      )}
//    </div>
//  );

  //const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users')

//  useEffect(() => {
//    fetchData();
//  }, []);
//
//  const fetchData = async () => {
//    console.log("data:", data);
//  };

  if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error: {error.message}</p>;

  return (
    < div>
      <h2> List Data</h2>
      <ul style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '5px',
        padding: 0,
        listStyle: 'none'
      }}>
        {data && data.map(user => (
          <li style={{
            color: 'black',
            padding: '10px',
            textAlign: 'first',
            border: '1px solid #4caf50'
          }}  key={user.id}>{user.name} <br/>{user.username} <br/> {user.address.city}</li>
          
        ))}
      </ul> </div>
  );

}
