import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">ProConnect</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;