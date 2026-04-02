import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>ProConnect</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;