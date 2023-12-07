import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-us" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
