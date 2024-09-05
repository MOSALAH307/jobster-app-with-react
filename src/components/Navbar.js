import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { Logo } from "./Logo.js";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Navbar.js";
import { useState } from "react";
import { clearStore, toggleSidebar } from "../features/user/userSlice.js";

export const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const logout = () => {
    dispatch(clearStore());
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="btn" type="button" onClick={toggleDropdown}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showDropdown ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logout}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
