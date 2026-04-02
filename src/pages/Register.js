import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleLogin = async () => {
    try {

      const res = await axios.post("http://localhost:8080/api/login", {
        email: email,
        password: password
      });

      if(res.data){
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard");
      } else {
        alert("Invalid credentials ❌");
      }

    } catch (err) {
      console.log(err);
      alert("Server error ❌");
    }
  };

  return(
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="title">Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <div className="links">
          <span onClick={()=>navigate("/register")}>Register</span>
        </div>

        <button className="btn" onClick={handleLogin}>Login</button>

      </div>
    </div>
  )
}

export default Login;