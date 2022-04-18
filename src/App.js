import logo from './logo.svg';
import './App.css';
import TopNavBar from './components/TopNavBar';


function App() {
  return (
    <div className="App">
      <TopNavBar />
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
          불룸불룸
        </a>
      </header>
    </div>
  );
}

export default App;
