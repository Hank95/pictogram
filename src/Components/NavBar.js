import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/" id="logo">
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
