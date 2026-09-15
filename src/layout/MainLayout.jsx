import { Outlet } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "../component/Footer";
// import Navbar from "../component/Navbar";
// import NavbarLite from "../component/Archrive/NavbarLite";
import GlassNavbar from "../component/GlassNavbar";

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-white dark:bg-[#030014] ">
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400"
      />
      <div className="fixed w-full top-0 z-50">
        {/* <Navbar></Navbar> */}
        {/* <NavbarLite></NavbarLite> */}
        <GlassNavbar></GlassNavbar>
      </div>
      <div className="container mx-auto min-h-[620px] lg:min-h-[775px] pt-20 w-auto lg:w-[95%]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;