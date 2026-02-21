import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Load remembered email
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  // 🔥 LOGIN FUNCTION
  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {

      // Remember email
      if (remember) {
        localStorage.setItem("rememberEmail", email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      // Save current logged in user
      localStorage.setItem("user", JSON.stringify(foundUser));

      // 🔥 ROLE BASED REDIRECT
      if (foundUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="auth-container-modern">
      <div className="auth-box-modern">

        <h2>Login to ProConnect</h2>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <div className="remember-row">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <span>Remember Me</span>
          </div>

          <button type="submit">Login</button>

          <p style={{ marginTop: "15px" }}>
            Don’t have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;