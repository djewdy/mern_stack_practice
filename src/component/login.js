import React from "react";
import "./Login.css"; // Link to the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="avatar">
          <img
            src="https://via.placeholder.com/100" // Placeholder for the avatar image
            alt="Avatar"
          />
        </div>
        <h2> </h2>
        <form>
          <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input
              type="text"
              placeholder="USERNAME"
              required
              className="input-field"
            />
          </div>
          <div className="input-container">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              placeholder="PASSWORD"
              required
              className="input-field"
            />
          </div>
          <div className="form-footer">
            
            <p>
              Don’t have an account? <a href="/register">Register</a>
            </p>
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;