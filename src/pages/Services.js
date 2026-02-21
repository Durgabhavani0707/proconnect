import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
const services = [
  { id: 1, name: "Home Cleaning", price: "₹999", icon: "🧹" },
  { id: 2, name: "Deep Cleaning", price: "₹1499", icon: "✨" },
  { id: 3, name: "Plumbing", price: "₹499", icon: "🔧" },
  { id: 4, name: "Electrician", price: "₹699", icon: "💡" },
  { id: 5, name: "AC Repair", price: "₹899", icon: "❄️" },
  { id: 6, name: "Painting", price: "₹1999", icon: "🎨" },
  { id: 7, name: "Car Wash", price: "₹400", icon: "🚗" },
  { id: 8, name: "Laundry", price: "₹299", icon: "👕" },
  { id: 9, name: "Gardening", price: "₹799", icon: "🌿" },
  { id: 10, name: "Pest Control", price: "₹1299", icon: "🐜" },
  { id: 11, name: "Carpenter", price: "₹699", icon: "🪚" },
  { id: 12, name: "Laptop Repair", price: "₹999", icon: "💻" },
  { id: 13, name: "Mobile Repair", price: "₹799", icon: "📱" },
  { id: 14, name: "Water Tank Cleaning", price: "₹1499", icon: "💧" },
  { id: 15, name: "Bathroom Cleaning", price: "₹699", icon: "🚿" },
  { id: 16, name: "Kitchen Cleaning", price: "₹899", icon: "🍳" },
  { id: 17, name: "Sofa Cleaning", price: "₹1000", icon: "🛋️" },
  { id: 18, name: "TV Installation", price: "₹499", icon: "📺" },
  { id: 19, name: "CCTV Installation", price: "₹2499", icon: "📹" },
  { id: 20, name: "House Shifting", price: "₹4999", icon: "📦" },

  // 🔥 NEW SERVICES START
  { id: 21, name: "Refrigerator Repair", price: "₹999", icon: "🧊" },
  { id: 22, name: "Washing Machine Repair", price: "₹899", icon: "🌀" },
  { id: 23, name: "Microwave Repair", price: "₹699", icon: "🔥" },
  { id: 24, name: "Door Lock Repair", price: "₹499", icon: "🔐" },
  { id: 25, name: "Window Installation", price: "₹1499", icon: "🪟" },
  { id: 26, name: "Floor Polishing", price: "₹1999", icon: "🧽" },
  { id: 27, name: "Curtain Cleaning", price: "₹599", icon: "🪟" },
  { id: 28, name: "Roof Waterproofing", price: "₹3499", icon: "🏠" },
  { id: 29, name: "Solar Panel Installation", price: "₹7999", icon: "☀️" },
  { id: 30, name: "Inverter Repair", price: "₹1299", icon: "🔋" },
  { id: 31, name: "Geyser Repair", price: "₹899", icon: "🚿" },
  { id: 32, name: "Gas Stove Repair", price: "₹499", icon: "🔥" },
  { id: 33, name: "Water Purifier Service", price: "₹799", icon: "🚰" },
  { id: 34, name: "Chimney Cleaning", price: "₹999", icon: "🌪️" },
  { id: 35, name: "Tile Installation", price: "₹2999", icon: "🧱" },
  { id: 36, name: "False Ceiling Work", price: "₹4999", icon: "🏗️" },
  { id: 37, name: "Interior Designing", price: "₹9999", icon: "🛋️" },
  { id: 38, name: "Security Guard Service", price: "₹5999", icon: "🛡️" },
  { id: 39, name: "Driver Service", price: "₹1999", icon: "🚘" },
  { id: 40, name: "Babysitting Service", price: "₹1499", icon: "👶" },
  { id: 41, name: "Elder Care Service", price: "₹1999", icon: "🧓" },
  { id: 42, name: "Pet Grooming", price: "₹899", icon: "🐶" },
  { id: 43, name: "Home Tutoring", price: "₹2499", icon: "📚" },
  { id: 44, name: "Event Decoration", price: "₹5999", icon: "🎉" },
  { id: 45, name: "DJ Service", price: "₹4999", icon: "🎶" },
  { id: 46, name: "Photography", price: "₹6999", icon: "📸" },
  { id: 47, name: "Makeup Artist", price: "₹3999", icon: "💄" },
  { id: 48, name: "Yoga Trainer", price: "₹1499", icon: "🧘" },
  { id: 49, name: "Fitness Trainer", price: "₹1999", icon: "🏋️" },
  { id: 50, name: "Home Automation Setup", price: "₹8999", icon: "🤖" },

];
const handleBooking = (service) => {
  const existing = JSON.parse(localStorage.getItem("bookings")) || [];

  const newBooking = {
    service: service.name,
    price: service.price,
    status: "Pending",
    payment: "Paid",
    date: new Date().toLocaleDateString(),
  };

  const updated = [...existing, newBooking];

  localStorage.setItem("bookings", JSON.stringify(updated));
  alert("Service Booked Successfully ✅");
};

  return (
    <div className="services-page">
      <h1>Our Professional Services</h1>

      <div className="service-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <button onClick={() => handleBooking(service)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;