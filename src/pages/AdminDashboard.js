import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  const [filter, setFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [search, setSearch] = useState("");

  // Booking Analytics
  const totalApproved = bookings.filter(
    (b) => b.status === "Approved"
  ).length;

  const totalRejected = bookings.filter(
    (b) => b.status === "Rejected"
  ).length;

  const totalPending = bookings.filter(
    (b) => !b.status || b.status === "Pending"
  ).length;

  const approvedRevenue = totalApproved * 2000;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleDeleteUser = (email) => {
    const updated = users.filter((u) => u.email !== email);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  const handleApprove = (index) => {
    const updated = [...bookings];
    updated[index].status = "Approved";
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const handleReject = (index) => {
    const updated = [...bookings];
    updated[index].status = "Rejected";
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((b) => b.status === filter);

  return (
    <div className="admin-modern">

      {/* HEADER */}
      <div className="admin-header">
        <div>
          <h2>ProConnect 👑</h2>
          <p className="admin-subtitle">Modern Admin Dashboard</p>
        </div>

        <div className="admin-right">
          <div className="admin-profile">
            <span>Admin</span>
          </div>

          <button className="logout-modern" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="admin-nav">
        <span
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          📊 Dashboard
        </span>

        <span
          className={activeTab === "users" ? "active" : ""}
          onClick={() => setActiveTab("users")}
        >
          👥 Users
        </span>

        <span
          className={activeTab === "bookings" ? "active" : ""}
          onClick={() => setActiveTab("bookings")}
        >
          📅 Bookings
        </span>
      </div>

      {/* CONTENT */}
      <div className="admin-content">

        {/* DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <>
            <div className="admin-stats">

              <div className="stat-box fade">
                <h3>👥 Total Users</h3>
                <p>{users.length}</p>
              </div>

              <div className="stat-box fade">
                <h3>📅 Total Bookings</h3>
                <p>{bookings.length}</p>
              </div>

              <div className="stat-box revenue fade">
                <h3>💰 Approved Revenue</h3>
                <p>₹ {approvedRevenue}</p>
              </div>

            </div>

            {/* Status Overview */}
            <div className="admin-status-overview">
              <div className="mini-stat pending">
                Pending: {totalPending}
              </div>

              <div className="mini-stat approved">
                Approved: {totalApproved}
              </div>

              <div className="mini-stat rejected">
                Rejected: {totalRejected}
              </div>
            </div>
          </>
        )}

        {/* USERS TAB */}
        {activeTab === "users" && (
          <div className="admin-section slide">
            <h2>Users</h2>

            <input
              type="text"
              placeholder="Search by email..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {users
              .filter((u) =>
                u.email.toLowerCase().includes(search.toLowerCase())
              )
              .map((u, index) => (
                <div key={index} className="admin-row">
                  <span>{u.email}</span>

                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteUser(u.email)}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        )}

        {/* BOOKINGS TAB */}
        {activeTab === "bookings" && (
          <div className="admin-section slide">
            <h2>Bookings</h2>

            <div className="filter-buttons">
              <button onClick={() => setFilter("All")}>All</button>
              <button onClick={() => setFilter("Approved")}>Approved</button>
              <button onClick={() => setFilter("Rejected")}>Rejected</button>
            </div>

            {filteredBookings.length === 0 ? (
              <p>No bookings available.</p>
            ) : (
              filteredBookings.map((b, index) => (
                <div key={index} className="admin-row">
                  <span>{b.service}</span>

                  <div className="action-buttons">

                    <button
                      className="approve-btn"
                      onClick={() => handleApprove(index)}
                    >
                      Approve
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() => handleReject(index)}
                    >
                      Reject
                    </button>

                    <span
                      className={`status ${
                        b.status ? b.status.toLowerCase() : "pending"
                      }`}
                    >
                      {b.status || "Pending"}
                    </span>

                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;