import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/education" exact element={<Education />}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
