import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      alert("User already exists");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      role
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered Successfully");
    navigate("/login");
  };

  return (
    <div className="auth-container-modern">
      <div className="auth-box-modern">

        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>

          <label>Full Name</label>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Register As</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Register</button>

        </form>

      </div>
    </div>
  );
}

export default Register;