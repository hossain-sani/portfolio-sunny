import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const socialClass =
  "flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:text-pink-400 hover:shadow-lg hover:shadow-pink-500/20";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative mt-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
      <footer className="bg-[#0a0920] text-neutral-content">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <a className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide lg:text-base">
              <img className="size-8 lg:size-9" src={logo} alt="logo" />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent">
                Arafat Hossain Sani
              </span>
            </a>

            <div className="text-center text-xs text-gray-400">
              <p>
                Copyright © {new Date().getFullYear()} — All rights reserved by{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text font-semibold text-transparent">
                  Sunny
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="https://linkedin.com/in/hossainsani/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialClass}
              >
                <BsLinkedin className="size-4 text-[#0A66C2]" />
              </Link>
              <Link
                to="https://github.com/hossain-sani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={socialClass}
              >
                <FaGithub className="size-4" />
              </Link>
              <button
                onClick={scrollTop}
                aria-label="Back to top"
                className="flex size-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/40"
              >
                <FaArrowUp className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;