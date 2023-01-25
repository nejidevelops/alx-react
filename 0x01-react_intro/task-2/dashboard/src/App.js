import logo from './holberton-logo.jpg';
import {getFullYear, getFooterCopy} from './utils'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton School Logo" />
        <h1>School dashbooard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" name='email' id='email' />
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' id='password' />
        <button>OK</button>        
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
