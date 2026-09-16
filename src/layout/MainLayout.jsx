import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import SideNavbar from "../component/SideNavbar";

const MainLayout = () => {
  return (
    <div className="bg-white dark:bg-[#030014]">
      <SideNavbar />
      <div className="lg:pl-[var(--nav-width)]">
        <div className="container mx-auto min-h-[620px] lg:min-h-[775px] w-auto lg:w-[95%]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
