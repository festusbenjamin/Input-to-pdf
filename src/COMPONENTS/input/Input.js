import "./input.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { firstName, secondName };
    navigate("/print", { state: { data } });
  };

  return (
    <form
      className="loginBox"
      action="submit"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        placeholder="first name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="loginInput"
        required
      ></input>
      <input
        placeholder="second name"
        type="text"
        name="secondName"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
        className="loginInput"
        required
      ></input>
      <button type="submit" value="submit" className="loginButton">
        Submit
      </button>
    </form>
  );
}
