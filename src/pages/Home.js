import { useNavigate } from "react-router-dom";
import "../styles.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero-modern">

        <div className="hero-text">
          <h1>
            Book Trusted <span>Home Services</span> Instantly
          </h1>

          <p>
            Professional cleaning, plumbing, electrical and repairs.
            Safe. Fast. Reliable.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/services")}>
              Explore Services
            </button>

            <button
              className="outline-btn"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="hero-image">
         <img
  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  alt="Happy Home Service Customer"
/>
        </div>

      </section>

      {/* FLOATING CARD SECTION */}
      <section className="floating-section">

        <div className="floating-card">
          <h3>500+</h3>
          <p>Verified Experts</p>
        </div>

        <div className="floating-card">
          <h3>2000+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="floating-card">
          <h3>24/7</h3>
          <p>Support</p>
        </div>

        <div className="floating-card">
          <h3>100%</h3>
          <p>Secure Payments</p>
        </div>

      </section>

      {/* CTA */}
      <section className="cta-modern">
        <h2>Ready to Fix Your Home Problems?</h2>
        <button onClick={() => navigate("/services")}>
          Book Now →
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer-modern">
        © 2026 ProConnect | Made with ❤️
      </footer>

    </div>
  );
}

export default Home;