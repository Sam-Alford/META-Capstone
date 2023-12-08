import { Routes, Route, Link } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Menu from '../pages/Menu';
import Reservations from '../pages/Reservations';
import OrderOnline from '../pages/OrderOnline';
import Login from '../pages/Login';
import logo from '../assets/logo.png';


function Nav() {
    return (
        <div>
            <nav className="nav">
            <img
                className="logo"
                src={logo}
                alt="Little Lemon Logo"
            />
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
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default Nav