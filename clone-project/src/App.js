import './App.css';
import { Navbar } from './components/Navbar';
import AllRoutes from './components/AllRoutes';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
