import "./input.css";
import "../pdf/Pdf";

export default function Input() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const first = e.target.fname.value;
        const second = e.target.sname.value;

        console.log(first);
    }
  return (
    <form className="loginBox" onSubmit={handleSubmit}>
      <input
        placeholder="first name"
        type="text"
        name="fname"
        className="loginInput"
        required
      ></input>
      <input
        placeholder="second name"
        type="text"
        name="sname"
        className="loginInput"
        required
      ></input>
      <button className="loginButton">Submit</button>
    </form>
  );
}
