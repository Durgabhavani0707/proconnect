import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles.css";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const [dark, setDark] = useState(false);
  const [notifications] = useState(2);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={dark ? "dashboard dark" : "dashboard"}>

      {/* SIDEBAR */}
      <div className="sidebar">
        <div>
          <h2>ProConnect 🚀</h2>
          <ul>
            <li onClick={() => navigate("/dashboard")}>🏠 Dashboard</li>
            <li onClick={() => navigate("/services")}>🛠 Services</li>
            <li onClick={() => navigate("/bookings")}>📅 Bookings</li>
            <li onClick={() => navigate("/profile")}>👤 Profile</li>
          </ul>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* TOP BAR */}
        <div className="top-bar">
          <div>
            <h1>Welcome, {user.name || "User"} 👋</h1>
            <p>{user.email}</p>
          </div>

          <div className="top-actions">
            <div className="notification">
              🔔
              {notifications > 0 && (
                <span className="badge">{notifications}</span>
              )}
            </div>

            <button className="theme-btn" onClick={() => setDark(!dark)}>
              {dark ? "☀" : "🌙"}
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-cards">
          <div className="card">
            <h3>Total Services</h3>
            <p>20+</p>
          </div>

          <div className="card highlight">
            <h3>Total Bookings</h3>
            <p>{bookings.length}</p>
          </div>

          <div className="card">
            <h3>Total Payments</h3>
            <p>₹ 12,500</p>
          </div>
        </div>

        {/* SIMPLE MODERN PROGRESS */}
        <div className="chart-box">
          <h3>Bookings Progress</h3>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${bookings.length * 10}%` }}
            >
              {bookings.length}
            </div>
          </div>
        </div>

        {/* GRID SECTION */}
        <div className="grid-2">

          <div className="calendar-box">
            <h3>Upcoming Services</h3>
            <p>📅 25th - AC Repair</p>
            <p>📅 30th - Plumbing Service</p>
          </div>

          <div className="payment-box">
            <h3>Recent Payments</h3>
            <p>₹ 2000 - Cleaning</p>
            <p>₹ 1500 - Electrical</p>
            <p>₹ 3000 - Painting</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;