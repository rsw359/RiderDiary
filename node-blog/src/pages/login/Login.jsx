import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label className="inputLabel">Email</label>
        <input type="text" className="loginInput" placeholder="email" />

        <label className="inputLabel">Password</label>
        <input type="Password" className="loginInput" placeholder="password" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
