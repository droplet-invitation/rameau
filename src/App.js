import './App.css';
import TopNavBar from './components/TopNavBar';
// import MainImg from './components/MainImg';
import Map from './components/Map'
// import GuestBook from './components/GuestBook'
import ImgGallery from './components/imgGallery'


function App() {

  return (
    <div className="App">
      <TopNavBar />
      <ImgGallery />
      <Map />
      
    </div>
  );
}

export default App;
