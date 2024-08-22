import Wrapper from "../assets/wrappers/BigSidebar.js";
import { Logo } from "./Logo.js";
import NavLinks from "./NavLinks.js";
import { useSelector } from "react-redux";

export const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
