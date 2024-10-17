import React from "react";
import "./isaies.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
const Isaies=()=>{
  const navigate1 = useNavigate();
  const goToAnotherPage1001 = () => {
    navigate1("/Signup");
  }
  const [EmailId, setEmailId] = useState()
  const [Password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:2001/isaies',{EmailId, Password})
    .then(result => { 
      console.log(result)
      if(result.data === "Success") {
          localStorage.setItem("token","2605")
          console.log('success')
          navigate("/Categories")
      }})
    .catch(err => console.log(err))
    

  }

    return(
        <div className="main">
      <div className="title">
        <strong>Login</strong>
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
          <div className="Buttonn">
          <button  className="submit" type="submit">
            login
          </button>
          <button  className="submit" onClick={()=>goToAnotherPage1001()}>
            sign up
          </button>
          </div>
          
        </form>
      </div>
    </div>
    )
};
export default Isaies