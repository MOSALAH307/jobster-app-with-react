import { NavLink } from "react-router-dom";
import { Links } from "../utils/links.js";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {Links.map((l) => {
        return (
          <NavLink
            key={l.id}
            to={l.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleSidebar}
            end
          >
            <span className="icon">{l.icon}</span> {l.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks