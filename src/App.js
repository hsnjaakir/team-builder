import React, { useState,useEffect } from 'react';
import './App.css';
import User from './component/User/User.js';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, [])
  const addMember = (name) => {
      setTeam([...team, name]);
  }
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <ul>
        {
          team.map((m, idx) => <li key={idx}>{m}</li>)
        }
      </ul>
      {
        users.map((user, idx) => <User user={user} key={idx} addMember={addMember}></User>)
      }
    </div>
  );
}

export default App;
