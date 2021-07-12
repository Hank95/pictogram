import { NavLink, Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
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
        <NavLink className="button" to="/">
          Home
        </NavLink>
        <NavLink className="button" to="/sketch-pad">
          Sketch Pad
        </NavLink>
        <NavLink className="button" to="/my-sketchs">
          My Sketches
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
