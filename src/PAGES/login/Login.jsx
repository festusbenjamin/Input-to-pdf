import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post("http://localhost:3400/login/user", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.success) {
          window.location.replace("/");
        } else {
          setError("Incorrect username or password");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setError("An error occurred");
        setIsLoading(false);
      });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Festusapp.</h3>
          <span className="loginDesc">
            Sign in and connect with friends all over.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="loginInput"
              required
            ></input>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="loginInput"
              required
            ></input>
            <br />
            {error && <p>{error}</p>}
            <button className="loginButton" disabled={isLoading}>
              {isLoading ? (
                <CircularProgress color="secondary" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
