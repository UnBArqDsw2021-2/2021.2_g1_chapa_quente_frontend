import './App.css';
import React from 'react';
import { Footer } from './components/Footer';

function App() {
  // const [msg, setMsg] = useState()

  // const testApi = async () => {
  //   const res = await api.get('/');
  //   setMsg(res.data.message);
  // };

  // testApi()

  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{msg}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
    </div>
  );
}

export default App;
