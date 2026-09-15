import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import ThemeToggle from "./Archrive/ThemeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact-me", label: "Contact" },
];

const navLinkClass = ({ isActive }) =>
  `relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
    isActive
      ? "text-white bg-gradient-to-r from-cyan-500 to-pink-500 shadow-md shadow-pink-500/20"
      : "text-base-content/75 dark:text-gray-300 hover:bg-base-content/10 hover:text-base-content dark:hover:text-white"
  }`;

const socialBtnClass =
  "flex size-9 items-center justify-center rounded-full border border-base-content/15 bg-base-100/50 text-base-content/70 backdrop-blur transition-all hover:border-pink-500 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-500/20";

const ResumeButton = ({ label }) => (
  <a
    href="/Front-End Developer Resume Of Sani.pdf"
    download="Front-End Developer Resume Of Sani"
    className="btn btn-primary btn-sm rounded-full gap-1.5"
  >
    {label && <span>Resume</span>}
    <FaDownload className="text-xs" />
  </a>
);

ResumeButton.propTypes = {
  label: PropTypes.bool,
};

const GlassNavbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative">
      {/* ---------- floating glass pill ---------- */}
      <div className="relative z-[70] mx-auto w-full max-w-7xl px-3 pt-3 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-center justify-between gap-2 rounded-full border border-white/40 bg-white/60 py-2 pl-3 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#030014]/60 sm:pl-4 sm:pr-3 lg:px-5"
        >
          {/* logo */}
          <Link to="/" onClick={close} className="flex items-center gap-2">
            <img className="size-8 lg:size-9" src={logo} alt="logo" />
            <span className="hidden text-sm font-bold uppercase tracking-wide lg:block lg:text-lg">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Arafat Hossain
              </span>
              <span> Sani</span>
            </span>
          </Link>

          {/* center links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <motion.a
              href="https://linkedin.com/in/hossainsani/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              aria-label="LinkedIn"
              className={`${socialBtnClass} hidden sm:flex`}
            >
              <BsLinkedin className="size-4 text-[#0A66C2]" />
            </motion.a>

            <motion.a
              href="https://github.com/hossain-sani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              aria-label="GitHub"
              className={`${socialBtnClass} hidden sm:flex`}
            >
              <FaGithub className="size-4" />
            </motion.a>

            <div className="hidden md:block">
              <ResumeButton label />
            </div>

            {/* mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex size-9 items-center justify-center rounded-full border border-base-content/15 bg-base-100/50 backdrop-blur transition-colors hover:bg-base-content/10 lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* ---------- mobile full-screen overlay ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm dark:bg-black/60"
              onClick={close}
            />

            <motion.div
              className="absolute inset-x-3 top-16 mx-auto max-w-7xl rounded-3xl border border-white/40 bg-white/70 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#030014]/85"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ul className="flex flex-col gap-1.5">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={close}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-center text-lg font-bold transition-colors duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-md shadow-pink-500/20"
                            : "text-base-content/80 dark:text-gray-200 hover:bg-base-content/10"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-5 flex items-center justify-center gap-3 border-t border-base-content/10 pt-5"
              >
                <a
                  href="https://linkedin.com/in/hossainsani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={socialBtnClass}
                >
                  <BsLinkedin className="size-4 text-[#0A66C2]" />
                </a>
                <a
                  href="https://github.com/hossain-sani"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={socialBtnClass}
                >
                  <FaGithub className="size-4" />
                </a>
                <div className="flex-1">
                  <div className="flex w-full justify-center">
                    <ResumeButton label />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlassNavbar;