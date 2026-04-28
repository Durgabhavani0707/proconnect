import { useNavigate } from "react-router-dom";
import "../styles/Services.css";
function Services() {
  const navigate = useNavigate();

  const services = [
  { name: "Cleaning", icon: "🧹" },
  { name: "Plumbing", icon: "🔧" },
  { name: "Electrical", icon: "💡" },
  { name: "Painting", icon: "🎨" },
  { name: "Carpentry", icon: "🪚" },
  { name: "AC Repair", icon: "❄️" },
  { name: "TV Repair", icon: "📺" },
  { name: "Laptop Repair", icon: "💻" },
  { name: "Mobile Repair", icon: "📱" },

  // 🔥 More services
  { name: "Deep Cleaning", icon: "🧽" },
  { name: "Bathroom Cleaning", icon: "🚿" },
  { name: "Kitchen Cleaning", icon: "🍽️" },
  { name: "Sofa Cleaning", icon: "🛋️" },
  { name: "Car Wash", icon: "🚗" },
  { name: "Gardening", icon: "🌱" },
  { name: "Pest Control", icon: "🐜" },
  { name: "Water Purifier Repair", icon: "💧" },
  { name: "Refrigerator Repair", icon: "🧊" },
  { name: "Washing Machine Repair", icon: "🌀" },
  { name: "Geyser Repair", icon: "🔥" },
  { name: "Fan Repair", icon: "🌀" },
  { name: "Light Installation", icon: "💡" },
  { name: "Switch Board Repair", icon: "🔌" },
  { name: "Door Repair", icon: "🚪" },
  { name: "Window Repair", icon: "🪟" },
  { name: "Furniture Assembly", icon: "🪑" },
  { name: "Interior Design", icon: "🏠" },
  { name: "Home Painting", icon: "🖌️" },
  { name: "Wall Design", icon: "🧱" },
  { name: "Tile Work", icon: "⬜" },
  { name: "CCTV Installation", icon: "📷" },
  { name: "Internet Setup", icon: "🌐" },
  { name: "Computer Repair", icon: "🖥️" },
  { name: "Software Install", icon: "📀" },
  { name: "Data Recovery", icon: "💾" },
  { name: "Printer Repair", icon: "🖨️" },
  { name: "Home Tutoring", icon: "📚" },
  { name: "Yoga Trainer", icon: "🧘" },
  { name: "Fitness Trainer", icon: "🏋️" },
  { name: "Beauty Services", icon: "💄" },
  { name: "Haircut", icon: "✂️" },
  { name: "Makeup Artist", icon: "💅" },
  { name: "Event Decoration", icon: "🎉" },
  { name: "Photography", icon: "📸" },
  { name: "Delivery Service", icon: "📦" },
  { name: "Driver Service", icon: "🚖" },
  ];

  return (
    <div className="services-container">
      <h2 className="title">Our Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => navigate("/booking", { state: { service: service.name } })}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>Quick & trusted service</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;