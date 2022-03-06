import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './services';

function App() {
  const [msg, setMsg] = useState()

  const testApi = async () => {
    const res = await api.get('/');
    setMsg(res.data.message);
  };

  testApi()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {msg}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
