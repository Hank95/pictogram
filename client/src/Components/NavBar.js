import { NavLink, Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import AuthNav from "./auth-nav";
const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/" id="logo">
        <Icon name="camera" />
        <div>
          <h3>pictogram</h3>
        </div>
      </Link>
      <nav className="navButtons">
        <NavLink className="button1" to="/">
          Home
        </NavLink>
        <NavLink className="button2" to="/sketch-pad">
          Sketch Pad
        </NavLink>
        <NavLink className="button3" to="/my-sketchs">
          My Sketches
        </NavLink>
        {/* <NavLink className="button3" to="/login"></NavLink>
        <AuthNav className="button3" /> */}
      </nav>
    </div>
  );
};

export default NavBar;
