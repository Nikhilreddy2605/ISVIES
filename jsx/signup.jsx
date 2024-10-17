import React from "react";
import "./signup.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
const Signup=()=>{
  const [EmailId, setEmailId] = useState()
  const [Password,setPassword] = useState()
  const [confirmPassword,setConfirmPassword] = useState()
  const navigate100 = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:2001/Register',{EmailId,Password,confirmPassword})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate100('/')

  }

    return(
        <div className="main">
      <div className="title">
        <strong>Sign up </strong>
      </div>
      <div>
        <form className="App" onSubmit={handleSubmit}>
          <div className="color">
            <input
              type="email"
              placeholder="Email Id"
              className="placeholder"
              onChange={(e) => setEmailId(e.target.value)}
            />
            <br />
          </div>
          <div className="div">
            <input
              type="password"
              placeholder="Password"
              className="placeholder"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            </div>
          <div className="div">
            <input
              type="password"
              placeholder=" Confirm Password"
              className="placeholder"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
          </div>
          <div className="Buttonn">
          <button  className="Signup2">
            Create Account
          </button>
          </div>
          
        </form>
      </div>
    </div>
    )
};
export default Signup