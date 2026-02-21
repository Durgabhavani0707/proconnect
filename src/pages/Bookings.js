import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "../styles.css";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  /* Load Bookings Once */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  /* Delete Booking */
  const deleteBooking = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  /* Download Professional Invoice */
  const downloadInvoice = (booking) => {
    const doc = new jsPDF();
    const invoiceNumber = "INV-" + Math.floor(Math.random() * 100000);

    doc.setFontSize(20);
    doc.text("ProConnect", 20, 20);

    doc.setFontSize(12);
    doc.text("Professional Home Services", 20, 30);
    doc.text("Email: support@proconnect.com", 20, 36);
    doc.text("Phone: +91 123456789", 20, 42);

    doc.line(20, 45, 190, 45);

    doc.setFontSize(14);
    doc.text("INVOICE", 150, 20);
    doc.text(`Invoice No: ${invoiceNumber}`, 130, 30);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 130, 36);

    doc.setFontSize(12);
    doc.text(`Service: ${booking.service}`, 20, 65);
    doc.text(`Price: ${booking.price}`, 20, 75);
    doc.text(`Status: ${booking.status || "Pending"}`, 20, 85);

    doc.line(20, 95, 190, 95);

    doc.setFontSize(14);
    doc.text(`Total Amount: ${booking.price}`, 20, 110);

    doc.setFontSize(11);
    doc.text("Thank you for choosing ProConnect 🚀", 20, 130);

    doc.save(`ProConnect_Invoice_${invoiceNumber}.pdf`);
  };

  /* Rating */
  const addRating = (index, rating) => {
    const updated = [...bookings];
    updated[index].rating = rating;
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  return (
    <div className="bookings-container">
      <h1>Your Bookings</h1>

      {bookings.length === 0 ? (
        <div className="empty-state">
          <p>No bookings yet.</p>
        </div>
      ) : (
        <div className="booking-grid">
          {bookings.map((b, index) => (
            <div key={index} className="booking-card">

              <div className="booking-top">
                <h3>{b.service}</h3>
                <span className={`status-badge ${b.status?.toLowerCase()}`}>
                  {b.status || "Pending"}
                </span>
              </div>

              <div className="booking-details">
                <div>
                  <p className="label">Price</p>
                  <p>{b.price}</p>
                </div>

                <div>
                  <p className="label">Payment</p>
                  <span className={`payment-badge ${b.payment?.toLowerCase()}`}>
                    {b.payment || "Paid"}
                  </span>
                </div>
              </div>

              {/* ⭐ Rating */}
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => addRating(index, star)}
                    className={b.rating >= star ? "star active" : "star"}
                  >
                    ⭐
                  </span>
                ))}
              </div>

              <div className="booking-actions">
                <button
                  className="invoice-btn"
                  onClick={() => downloadInvoice(b)}
                >
                  Download Invoice
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => deleteBooking(index)}
                >
                  Cancel
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;