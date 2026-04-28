import { useEffect, useState } from "react";
import "./Bookings.css";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];

    // ❌ remove empty/invalid entries
    const filtered = data.filter(
      (b) => b.service && b.date && b.time
    );

    setBookings(filtered);
  }, []);

  return (
    <div className="bookings-container">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((b, index) => (
          <div className="booking-card" key={index}>
            <div>
              <h3>{b.service}</h3>
              <p>{b.date} | {b.time}</p>
              <small>{b.address}</small>
            </div>

            <span className={`status ${b.status?.toLowerCase() || "pending"}`}>
              {b.status || "Pending"}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default Bookings;