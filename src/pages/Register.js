import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // store user in localStorage (temporary)
    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("role", formData.role);

    alert("✅ Registered Successfully!");

    navigate("/login");
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">

        <h2>📝 Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />

          {/* Role selection */}
          <select name="role" onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Register 🚀</button>

        </form>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>

      </div>
    </div>
  );
}

export default Register;