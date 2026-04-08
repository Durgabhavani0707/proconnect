import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    "Cleaning","Plumbing","Electrical","Painting","Carpentry",
    "AC Repair","TV Repair","Laptop Repair","Mobile Repair"
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Our Services</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate("/booking", { state: { service } })}
            style={{
              padding: "20px",
              background: "#fff",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;