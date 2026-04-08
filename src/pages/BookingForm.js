import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const location = useLocation();
  const selectedService = location.state?.service || "";

  const [formData, setFormData] = useState({
    name: "",
    service: selectedService,
    date: "",
    time: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed 🎉");
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-card">
        
        <h2>Book Your Service</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Service</label>
<input
  type="text"
  name="service"
  value={formData.service || ""}
  readOnly
  className="readonly-input"
/>          </div>

          <div className="row">
            <div className="input-group">
              <label>Date</label>
              <input type="date" name="date" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Time</label>
              <input type="time" name="time" onChange={handleChange} required />
            </div>
          </div>

          <div className="input-group">
            <label>Address</label>
            <textarea name="address" onChange={handleChange} required />
          </div>

          <button type="submit">Confirm Booking</button>
        </form>

      </div>
    </div>
  );
}

export default BookingForm;