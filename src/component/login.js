import React from "react";
import "./Login.css"; // Link to the CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
//import here the useState
const Login = () => {
  //here u declare the states as an expl
  // const [email,setEmail] = useState("")
  const [username ,setUsername] = useState("");

  //function to handle the submition of the the form

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(username)
    }
  
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
              onChange={(e)=>setUsername(e.target.value)}
            />
            {/* <input
              type="text"
              placeholder="email"
              required
              className="input-field"
              // u add onChange to set the email value to the state
              onChange={(e)=>setEmail(e.target.value)}
            /> */}
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
            <button
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              type="submit"
              className="btn"
            >
              Login
            </button>
            {/* this one to call the function when u submit the form use onSubmit */}
            {/* <button onSubmit={(e)=>{handleSubmit(e)}} type="submit" className="btn">
              Login
            </button> */}
          </div>
        </form>
      </div>
    </div>
    // YALAAA GOOD LUCK
  );
};

export default Login;
