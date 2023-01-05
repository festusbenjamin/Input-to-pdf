import { useRef } from "react";
import "./register.css";
import  axios  from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.current.value !== confirmPassword.current.value){
      confirmPassword.current.setCustomValidity("Passwords don't match!")
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };

      try{

        await axios.post("http://localhost:3400/register/user",user);
        navigate('/login');
      }catch(err){
        console.log(err);
      }
    }
  }


  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Festusapp.</h3>
          <span className="registerDesc">Register now and connect with friends all over.</span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              type="text"
              className="registerInput"
              ref={username}
              required
            ></input>
            <input
              placeholder="Email"
              type="email"
              className="registerInput"
              ref={email}
              required
            ></input>
            <input
              placeholder="Password"
              type="password"
              className="registerInput"
              ref={password}
              required
            ></input>
            <input
              placeholder="Confirm Password"
              type="password"
              className="registerInput"
              ref={confirmPassword}
              required
            ></input>
            <button type="submit" className="registerButton">Sign Up</button>
            <p>
              Have an account? <Link to="/login"><span className="registerLogin"> Log In</span></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
