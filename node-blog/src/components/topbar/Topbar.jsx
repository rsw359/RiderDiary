import "./topbar.css";
import monkey from "./assets/monkey.jpg";
import { Link } from "react-router-dom";

const Topbar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fa-brands fa-strava"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
      </div>
      <div className="top-center">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>

          <li className="topListItem">
            <Link to="" className="link">
              About
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link">Contact</Link>
          </li>

          <li className="topListItem">
            <Link to="write" className="link">
              New Post
            </Link>
          </li>

          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>

      <div className="top-right">
        {user ? (
          <img className="topImage" src={monkey} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
