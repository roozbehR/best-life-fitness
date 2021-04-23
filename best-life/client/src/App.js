import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import NavBar from './components/NavBar/navbar'
import LoginForm from './components/LoginForm/loginform'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <header className="App-header">
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
      </header> */}
      <LoginForm />
    </div>
  );
}

export default App;