import logo from './logo.svg';
import './App.css';
import TopNavBar from './components/TopNavBar';
import MainImg from './components/MainImg';
import Map from './components/Map'
import GuestBook from './components/GuestBook'


function App() {
  return (
    <div className="App">
      <TopNavBar />
      <MainImg />
      <Map />
      <GuestBook />
    </div>
  );
}

export default App;
