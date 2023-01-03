import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label className="inputLabel">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username"
        />

        <label className="inputLabel">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email"
        />

        <label>Password</label>
        <input
          type="Password"
          className="registerInput"
          placeholder="Password"
        />
        <button className="registerButton">Register</button>
      </form>

      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
