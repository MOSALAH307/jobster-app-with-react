import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";

export const SharedLayout = () => {
  return (
    <main>
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
