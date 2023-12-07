import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about-us" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/reservations" className="nav-item">Reservations</Link>
        <Link to="/order" className="nav-item">Order Online</Link>
        <Link to="/login" className="nav-item">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
