import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">ProConnect</h2>
        <div>
          <button onClick={() => navigate("/login")} className="nav-btn">
            Login
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Trusted Home Services</h1>
          <p>
            Book electricians, plumbers, cleaners & more — instantly at your home.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/services")} className="primary">
              Explore Services
            </button>
            <button onClick={() => navigate("/login")} className="secondary">
              Get Started
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
            alt="services"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <span>🛠️</span>
            <h3>Electrician</h3>
            <p>Expert electrical repairs & installations</p>
          </div>

          <div className="card">
            <span>🚿</span>
            <h3>Plumber</h3>
            <p>Fix leaks & plumbing issues instantly</p>
          </div>

          <div className="card">
            <span>🧹</span>
            <h3>Cleaning</h3>
            <p>Professional home cleaning services</p>
          </div>

          <div className="card">
            <span>❄️</span>
            <h3>AC Repair</h3>
            <p>AC servicing & cooling solutions</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 ProConnect. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;