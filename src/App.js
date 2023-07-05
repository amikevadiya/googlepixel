import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Style.css';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';

function App() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className='wow fadeIn'> Animation </p>
      </header>
    </div>
  );
}

export default App;
