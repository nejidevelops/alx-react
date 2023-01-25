import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input name='email' type="email" id='email'/>
        &nbsp;&nbsp;
        <label htmlFor="password">Password: </label>
        <input name='password' type="password" id='password'/>
        &nbsp;&nbsp;
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
