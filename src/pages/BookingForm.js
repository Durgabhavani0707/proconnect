import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedService = location.state?.service || "Electrical";

  const [formData, setFormData] = useState({
    name: "",
    service: selectedService,
    date: "",
    time: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ prevent empty data
    if (!formData.name || !formData.date || !formData.time || !formData.address) {
      alert("Please fill all fields");
      return;
    }

    const oldBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      ...formData,
      status: "Pending" // 🔥 default status
    };

    const updated = [...oldBookings, newBooking];

    localStorage.setItem("bookings", JSON.stringify(updated));

    alert("🎉 Booking Confirmed!");
    navigate("/bookings");
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-box">

        <h2>Book Your Service</h2>
        <p className="subtitle">Fill details to confirm</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            value={formData.service}
            readOnly
            className="readonly"
          />

          <div className="row">
            <input type="date" name="date" onChange={handleChange} required />
            <input type="time" name="time" onChange={handleChange} required />
          </div>

          <textarea
            name="address"
            placeholder="Enter address"
            onChange={handleChange}
            required
          />

          <button type="submit">Confirm Booking 🚀</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;