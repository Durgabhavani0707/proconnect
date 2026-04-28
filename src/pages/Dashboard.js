import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <div className="container">

        {/* LEFT */}
        <div className="left">

          <div className="header">
            <h1>👋 Welcome to ProConnect</h1>
            <p>Manage your services and bookings easily</p>
          </div>

          <div className="stats">
    <div className="card">
  <h2>12</h2>
  <p>Services</p>
</div>
            <div className="card">
              <h2>5</h2>
              <p>Bookings</p>
            </div>

            <div className="card">
              <h2>3</h2>
              <p>Completed</p>
            </div>
          </div>

          <div className="big-card">
            <p>📊 Analytics / Overview</p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="right">

          <div className="action" onClick={() => navigate("/services")}>
            🛠 Book Service
          </div>

          <div className="action" onClick={() => navigate("/bookings")}>
            📋 My Bookings
          </div>

          <div className="action" onClick={() => navigate("/profile")}>
            👤 Profile
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;