import { lazy, Suspense } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero3DScene = lazy(() => import("./Hero3DScene.jsx"));
const ParticlesBackground = lazy(() => import("./ParticlesBackground.jsx"));

const PhotoNew = () => {
  const socials = [
    { icon: FaGithub, href: "https://github.com/hossain-sani", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/hossain-sani/", label: "LinkedIn" },
    { icon: FaFacebookF, href: "https://www.facebook.com/sani.glitched/", label: "Facebook" },
    { icon: FaEnvelope, href: "mailto:sanicse03@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-[92vh] overflow-hidden rounded-3xl px-5 lg:px-12 py-16 lg:py-24 flex items-center  border-base-content/10">
      {/* ------- 3D background ------- */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <>
              <div className="absolute -top-28 -left-28 size-96 rounded-full bg-cyan-400/20 dark:bg-cyan-500/15 blur-3xl" />
              <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-pink-400/20 dark:bg-pink-500/15 blur-3xl" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-72 rounded-full bg-green-400/15 dark:bg-green-500/10 blur-3xl" />
            </>
          }
        >
          <Hero3DScene />
          <ParticlesBackground />
        </Suspense>
      </div>

      {/* ------- subtle vignette for readability ------- */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-100/60 via-transparent to-base-100/30" />

      {/* ------- content ------- */}
      <div className="relative z-10 w-full grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          className="rounded-3xl border border-base-content/10 bg-base-100/60 dark:bg-base-300/20 backdrop-blur-xl p-7 lg:p-10 shadow-2xl shadow-base-content/5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* ------- badge ------- */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-xs lg:text-sm font-semibold text-cyan-500 dark:text-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            Available for work
          </motion.div>

          {/* ------- headline ------- */}
          <motion.h1
            className="mt-5 text-3xl lg:text-5xl font-extrabold leading-tight text-base-content dark:text-white "
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_6s_linear_infinite]">
              Arafat Hossain
            </span>
            <br />
            Sani
            <span className="mt-3 block text-lg lg:text-2xl font-bold text-base-content/70">
              <Typewriter
                words={[
                  " Software Engineer ",
                  " MERN Stack Developer ",
                  " ML Enthusiast ",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={110}
                deleteSpeed={30}
                delaySpeed={1200}
              />
            </span>
          </motion.h1>

          {/* ------- tagline ------- */}
          <motion.p
            className="mt-5 text-sm lg:text-base font-medium text-base-content/70 dark:text-gray-300 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
          >
            I turn ideas into fast, accessible, and scalable web experiences
            using modern technologies.
          </motion.p>

          {/* ------- CTAs ------- */}
          <motion.div
            className="mt-7 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }}
          >
            <Link to="/contact-me">
              <button className="w-full btn btn-primary lg:text-sm rounded-full px-8 group">
                Contact me
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <a
              href="/Front-End Developer Resume Of Sani.pdf"
              download="Front-End Developer Resume Of Sani"
            >
              <button className="w-full btn btn-primary btn-outline lg:text-sm rounded-full px-8 flex items-center justify-center gap-2">
                Download Resume
                <FaDownload />
              </button>
            </a>
          </motion.div>

          {/* ------- socials ------- */}
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
          >
            <span className="hidden sm:block h-px w-12 bg-base-content/20" />
            {socials.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex size-10 items-center justify-center rounded-full border border-base-content/15 bg-base-100 text-base-content/70 hover:border-pink-500 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
              >
                <Icon className="text-base" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ------- scroll hint ------- */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-base-content/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
};

export default PhotoNew;