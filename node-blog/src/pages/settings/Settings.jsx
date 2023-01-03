import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import monkey from "./assets/monkey.jpg";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>

          <div className="settingsPP">
            <img className="profileImg" src={monkey} alt="" />

            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="DrunkCyclist" />

          <label>Email</label>
          <input type="email" placeholder="DrunkCyclist@gmail.com" />

          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
