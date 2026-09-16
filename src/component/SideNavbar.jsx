import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  FaGithub,
  FaLinkedinIn,
  FaXmark,
  FaBars,
  FaDownload,
  FaArrowRightArrowLeft,
  FaHouse,
  FaFolderOpen,
  FaUser,
  FaEnvelope,
} from "react-icons/fa6";
import logo from "../assets/logo.png";
import ThemeToggle from "./Archrive/ThemeToggle";

const SideNav3D = lazy(() => import("./Archrive/SideNav3D"));

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: FaHouse },
  { to: "/projects", label: "Projects", icon: FaFolderOpen },
  { to: "/about", label: "About", icon: FaUser },
  { to: "/contact-me", label: "Contact", icon: FaEnvelope },
];

const SOCIALS = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/hossain-sani/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/hossain-sani", label: "GitHub" },
];

const RESUME_HREF = "/Front-End Developer Resume Of Sani.pdf";

const MIN_WIDTH = 90;
const MAX_WIDTH = 440;
const DEFAULT_WIDTH = 215;
const COMPACT_THRESHOLD = 190;

const getInitialWidth = () => {
  if (localStorage.getItem("nav-width-migrated") !== "1") {
    localStorage.setItem("nav-width-migrated", "1");
    localStorage.setItem("nav-width", String(DEFAULT_WIDTH));
    return DEFAULT_WIDTH;
  }
  const saved = Number.parseInt(localStorage.getItem("nav-width"), 10);
  if (Number.isFinite(saved) && saved >= MIN_WIDTH && saved <= MAX_WIDTH) {
    return saved;
  }
  return DEFAULT_WIDTH;
};

const useUtcClock = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  return [
    pad(now.getUTCHours()),
    pad(now.getUTCMinutes()),
    pad(now.getUTCSeconds()),
  ].join(":");
};

const navLinkClass = ({ isActive }) =>
  `group relative flex items-center gap-3 overflow-hidden rounded-full px-4 py-2.5 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
    isActive
      ? "text-[#030014]"
      : "text-white/45 hover:text-amber-300"
  }`;

const compactLinkClass = ({ isActive }) =>
  `group relative flex size-12 items-center justify-center rounded-2xl text-lg transition-colors duration-300 ${
    isActive
      ? "text-[#030014]"
      : "text-white/45 hover:text-amber-300"
  }`;

const Divider = () => <div className="mx-1 h-px bg-white/10" />;

const NavPanel = ({ onNavigate, isMobile, isCompact }) => {
  const time = useUtcClock();

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden border-r border-white/10 bg-[#08040a]/95 backdrop-blur-2xl">
      {/* ---------- soft amber edge glow (left rail) ---------- */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-amber-400/40 shadow-[0_0_18px_rgba(251,191,36,0.55)]" />

      <AnimatePresence mode="wait" initial={false}>
        {isCompact ? (
          /* ---------- COMPACT (icon rail) ---------- */
          <motion.div
            key="compact"
            className="flex h-full w-full flex-col"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <motion.header
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex flex-col items-center gap-3 px-2 pt-6"
            >
              <Link
                to="/"
                onClick={onNavigate}
                aria-label="Arafat Hossain Sani"
                className="relative"
              >
                <img
                  className="size-11 rounded-2xl border border-amber-400/40 object-cover"
                  src={logo}
                  alt="Arafat Hossain Sani logo"
                />
                <span className="absolute -bottom-1 -right-1 size-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
              </Link>
              <span className="[writing-mode:vertical-rl] text-base font-extrabold uppercase tracking-[0.4em] text-amber-300">
                Sani
              </span>
            </motion.header>

            <Divider />

            <nav className="relative flex flex-1 flex-col items-center justify-center gap-3 py-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onNavigate}
                  aria-label={item.label}
                  title={item.label}
                  className={compactLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="sidebar-active-pill"
                          className="absolute inset-0 rounded-2xl bg-amber-400 shadow-[0_0_26px_rgba(251,191,36,0.5)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <item.icon className="relative" />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <Divider />

            <footer className="relative flex flex-col items-center gap-3 px-2 pb-6 pt-4">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/55 transition-all duration-300 hover:border-amber-400/60 hover:text-amber-300 hover:shadow-[0_0_16px_rgba(251,191,36,0.35)]"
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
              <ThemeToggle />
              <a
                href={RESUME_HREF}
                download="Front-End Developer Resume Of Sani"
                aria-label="Download Resume"
                title="Download Resume"
                className="flex size-10 items-center justify-center rounded-full bg-amber-400 text-[#030014] transition-colors duration-300 hover:bg-amber-300"
              >
                <FaDownload className="text-sm" />
              </a>
            </footer>
          </motion.div>
        ) : (
          /* ---------- FULL ---------- */
          <motion.div
            key="full"
            className="flex h-full w-full flex-col"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* ---------- header ---------- */}
            <motion.header
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative px-5 pt-6 pb-5"
            >
              <Link to="/" onClick={onNavigate} className="flex items-center gap-3">
                <span className="relative shrink-0">
                  <img
                    className="size-11 rounded-2xl border border-amber-400/40 object-cover"
                    src={logo}
                    alt="Arafat Hossain Sani logo"
                  />
                  <span className="absolute -bottom-1 -right-1 size-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                </span>
                <span className="text-sm font-bold uppercase leading-tight tracking-widest text-white">
                  Arafat Hossain
                  <span className="mt-0.5 block text-amber-300">Sani</span>
                </span>
              </Link>

              <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-white/35">
                Software Developer
              </p>
            </motion.header>

            <Divider />

            {/* ---------- navigation ---------- */}
            <nav className="relative flex flex-1 flex-col justify-center gap-1 px-4 py-6">
              <span className="mb-3 px-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-400/80">
                Menu
              </span>
              {NAV_ITEMS.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onNavigate}
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="sidebar-active-pill"
                          className="absolute inset-0 rounded-full bg-amber-400 shadow-[0_0_26px_rgba(251,191,36,0.5)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative text-[11px] font-mono text-amber-400/70">
                        0{index + 1}
                      </span>
                      <span className="relative">{item.label}</span>
                      <span
                        className={`ml-auto size-1.5 rounded-full transition-colors duration-300 ${
                          isActive
                            ? "bg-[#030014]"
                            : "bg-white/15 group-hover:bg-amber-400"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <Divider />

            {/* ---------- footer ---------- */}
            <footer className="relative px-5 pt-4 pb-5">
              {/* live utc clock */}
              <div className="flex items-center justify-between rounded-xl border border-amber-400/20 bg-amber-400/5 px-3 py-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                    UTC
                  </span>
                  <span className="font-mono text-lg font-semibold tabular-nums text-amber-300">
                    {time}
                  </span>
                </div>
                <span className="size-2 animate-pulse rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              </div>

              {/* socials + theme */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/55 transition-all duration-300 hover:border-amber-400/60 hover:text-amber-300 hover:shadow-[0_0_16px_rgba(251,191,36,0.35)]"
                    >
                      <Icon className="text-sm" />
                    </motion.a>
                  ))}
                </div>
                <ThemeToggle />
              </div>

              <a
                href={RESUME_HREF}
                download="Front-End Developer Resume Of Sani"
                className={`mt-4 flex items-center justify-center gap-2 rounded-full bg-amber-400 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-[#030014] transition-colors duration-300 hover:bg-amber-300 ${
                  isMobile ? "" : "shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                }`}
              >
                <FaDownload className="text-xs" />
                Resume
              </a>

              {/* 3D accent */}
              {!isMobile && (
                <div className="pointer-events-none mx-auto mt-5 h-32 w-32 opacity-90">
                  <Suspense fallback={null}>
                    <SideNav3D />
                  </Suspense>
                </div>
              )}
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

NavPanel.propTypes = {
  onNavigate: PropTypes.func,
  isMobile: PropTypes.bool,
  isCompact: PropTypes.bool,
};

const SideNavbar = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(getInitialWidth);
  const [hintVisible, setHintVisible] = useState(false);
  const [hintShown, setHintShown] = useState(
    () => localStorage.getItem("nav-resize-interacted") === "1"
  );
  const isCompact = width < COMPACT_THRESHOLD;
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const draggingRef = useRef(false);
  const hoverTimer = useRef(null);
  const close = () => setOpen(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--nav-width", `${width}px`);
    localStorage.setItem("nav-width", String(width));
  }, [width]);

  useEffect(() => {
    return () => clearTimeout(hoverTimer.current);
  }, []);

  useEffect(() => {
    if (hintShown) return;
    const showTimer = setTimeout(() => setHintVisible(true), 1500);
    const hideTimer = setTimeout(() => setHintVisible(false), 6500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [hintShown]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const dismissHint = () => {
    setHintVisible(false);
    setHintShown(true);
    localStorage.setItem("nav-resize-interacted", "1");
  };

  const scheduleTooltip = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      if (!draggingRef.current) setTooltipVisible(true);
    }, 600);
  };

  const hideTooltip = () => {
    clearTimeout(hoverTimer.current);
    if (!draggingRef.current) setTooltipVisible(false);
  };

  const startResize = (e) => {
    e.preventDefault();
    dismissHint();
    draggingRef.current = true;
    clearTimeout(hoverTimer.current);
    setTooltipVisible(true);
    const onMove = (ev) => {
      const next = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, ev.clientX));
      setWidth(next);
    };
    const onUp = () => {
      draggingRef.current = false;
      clearTimeout(hoverTimer.current);
      setTooltipVisible(false);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  return (
    <>
      {/* ---------- desktop sidebar ---------- */}
      <aside
        className="group fixed inset-y-0 left-0 z-40 hidden lg:block"
        style={{ width }}
      >
        <NavPanel isCompact={isCompact} />
        {/* ---------- resizable grip ---------- */}
        <motion.button
          type="button"
          aria-label="Resize sidebar"
          onPointerDown={startResize}
          onPointerEnter={scheduleTooltip}
          onPointerLeave={hideTooltip}
          animate={hintVisible ? { x: [0, -4, 4, -3, 3, 0] } : { x: 0 }}
          transition={{
            duration: 0.9,
            repeat: hintVisible ? Infinity : 0,
            repeatDelay: 1.2,
            ease: "easeInOut",
          }}
          className="group/handle absolute inset-y-0 -right-2 z-10 w-5 cursor-ew-resize touch-none"
        >
          <span className="absolute inset-y-0 left-0.5 w-px bg-amber-400/0 transition-colors duration-200 group-hover/handle:bg-amber-400/60" />
          <span className="absolute right-1 top-1/2 flex h-20 w-6 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-[#08040a]/90 shadow-[0_0_12px_rgba(251,191,36,0.18)] transition-all duration-300 group-active/handle:h-16 group-hover/handle:h-24 group-hover/handle:border-amber-400/50 group-hover/handle:shadow-[0_0_18px_rgba(251,191,36,0.4)]">
            <span className="size-[3px] rounded-full bg-white/40 transition-colors duration-200 group-hover/handle:bg-amber-400" />
            <span className="size-[3px] rounded-full bg-white/40 transition-colors duration-200 group-hover/handle:bg-amber-400" />
            <span className="size-[3px] rounded-full bg-white/40 transition-colors duration-200 group-hover/handle:bg-amber-400" />
            <FaArrowRightArrowLeft className="mt-0.5 h-2.5 w-2.5 text-amber-400 opacity-0 transition-opacity duration-200 group-hover/handle:opacity-100" />
          </span>
        </motion.button>

        {/* ---------- first-visit resize hint ---------- */}
        <AnimatePresence>
          {hintVisible && (
            <motion.div
              className="pointer-events-none absolute top-1/2 left-full z-50 ml-2 -translate-y-1/2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l border-amber-400/40 bg-[#08040a]" />
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-amber-400/40 bg-[#08040a]/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.35)]"
              >
                <FaArrowRightArrowLeft className="text-xs" />
                Drag to resize
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------- delayed hover tooltip ---------- */}
        <AnimatePresence>
          {tooltipVisible && (
            <motion.div
              className="pointer-events-none absolute top-1/2 left-full z-50 ml-2 -translate-y-1/2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <span className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l border-amber-400/40 bg-[#08040a]" />
              <div className="rounded-xl border border-amber-400/40 bg-[#08040a]/95 px-3 py-2 shadow-[0_0_20px_rgba(251,191,36,0.35)]">
                <div className="flex items-baseline gap-2 whitespace-nowrap">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                    {isCompact ? "Compact rail" : "Full layout"}
                  </span>
                  <span className="font-mono text-sm font-semibold tabular-nums text-white">
                    {Math.round(width)}px
                  </span>
                </div>
                {isCompact && (
                  <p className="mt-1 whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-white/45">
                    name, subtitle, clock, 3D hidden
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>

      {/* ---------- mobile floating toggle ---------- */}
      <motion.button
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="fixed left-4 top-4 z-[70] flex size-11 items-center justify-center rounded-full bg-amber-400 text-[#030014] shadow-[0_0_18px_rgba(251,191,36,0.5)] lg:hidden"
      >
        {open ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
      </motion.button>

      {/* ---------- mobile drawer ---------- */}
      <AnimatePresence>
        {open && (
          <div className="lg:hidden">
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-[65] w-72"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <NavPanel
                isMobile
                isCompact={false}
                onNavigate={close}
              />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideNavbar;