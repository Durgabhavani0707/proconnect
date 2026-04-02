import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:8080/api/login", {
      email,
      password,
    });

    console.log("SUCCESS:", res.data);

    localStorage.setItem("user", JSON.stringify(res.data));
    alert("Login Success ✅");
    navigate("/dashboard");

  } catch (err) {
    console.log("ERROR FULL:", err);

    if (err.response) {
      alert("Error: " + err.response.status);
    } else if (err.request) {
      alert("No response from server ❌");
    } else {
      alert("Error: " + err.message);
    }
  }
};
  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="title">Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="links">
          <span onClick={() => navigate("/register")}>
            Don't have an account? Register
          </span>
        </div>

        <button className="btn" onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;