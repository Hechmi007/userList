import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './Components/UserList';


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <h6>{user.username}</h6>
              <h6>{user.email}</h6>
              <h6>{user.adress}</h6>
              <br/>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default App;
