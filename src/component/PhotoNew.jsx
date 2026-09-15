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
import GradientButton from "./ui/GradientButton";
import AmbientParticles from "./AmbientParticles";

const Hero3DScene = lazy(() => import("./Hero3DScene.jsx"));

const PhotoNew = () => {
  const socials = [
    { icon: FaGithub, href: "https://github.com/hossain-sani", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/hossain-sani/", label: "LinkedIn" },
    { icon: FaFacebookF, href: "https://www.facebook.com/sani.glitched/", label: "Facebook" },
    { icon: FaEnvelope, href: "mailto:sanicse03@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden rounded-3xl border-base-content/10 px-5 py-16 lg:px-12 lg:py-24">
      {/* ------- 3D + ThreeUI background ------- */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <>
              <div className="absolute -left-28 -top-28 size-96 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/15" />
              <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-pink-400/20 blur-3xl dark:bg-pink-500/15" />
              <div className="absolute left-1/2 top-1/3 size-72 -translate-x-1/2 rounded-full bg-green-400/15 blur-3xl dark:bg-green-500/10" />
            </>
          }
        >
          <Hero3DScene />
          <AmbientParticles density={9000} />
        </Suspense>
      </div>

      {/* ------- subtle vignette for readability ------- */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-100/60 via-transparent to-base-100/30" />

      {/* ------- content ------- */}
      <div className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-2">
        {/* gradient hairline glass card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-cyan-500/50 via-pink-500/50 to-cyan-500/50 p-px shadow-2xl shadow-base-content/10">
          <motion.div
            className="rounded-[calc(1.5rem-1px)] bg-base-100/70 p-7 backdrop-blur-xl lg:p-10 dark:bg-[#0a0920]/70"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* ------- badge ------- */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-500 lg:text-sm dark:text-cyan-400"
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
              className="mt-5 font-heading text-3xl font-extrabold leading-tight text-base-content lg:text-5xl dark:text-white"
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
              <span className="mt-3 block text-lg font-bold text-base-content/70 lg:text-2xl">
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
              className="mt-5 max-w-xl text-sm font-medium text-base-content/70 lg:text-base dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
            >
              I turn ideas into fast, accessible, and scalable web experiences
              using modern technologies.
            </motion.p>

            {/* ------- CTAs ------- */}
            <motion.div
              className="mt-7 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }}
            >
              <Link to="/contact-me">
                <GradientButton className="w-full px-8 sm:w-auto">
                  Contact me
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </GradientButton>
              </Link>
              <a
                href="/Front-End Developer Resume Of Sani.pdf"
                download="Front-End Developer Resume Of Sani"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-8 py-2.5 text-sm font-semibold text-black backdrop-blur-xl transition-all duration-300 hover:border-pink-400 hover:text-pink-500 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:text-pink-400"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>
            </motion.div>

            {/* ------- socials ------- */}
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
            >
              <span className="hidden h-px w-12 bg-base-content/20 sm:block" />
              {socials.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex size-10 items-center justify-center rounded-full border border-base-content/15 bg-base-100 text-base-content/70 transition-all hover:border-pink-500 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <Icon className="text-base" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ------- floating terminal ------- */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
        className="absolute bottom-16 right-4 z-20 hidden w-72 overflow-hidden rounded-xl border border-base-content/10 bg-base-100/80 font-mono text-xs shadow-2xl backdrop-blur-xl lg:block xl:right-10"
      >
        <div className="flex items-center gap-2 border-b border-base-content/10 bg-base-200/60 px-3 py-2 dark:bg-white/5">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-yellow-400" />
          <span className="size-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-[10px] text-base-content/50">
            sunny@portfolio — zsh
          </span>
        </div>
        <div className="space-y-1.5 p-4 text-base-content/80">
          <p>
            <span className="text-pink-500">❯</span>{" "}
            <span className="text-cyan-500">npm</span> run deploy
          </p>
          <p className="text-green-500">✓ Build successful in 4.2s</p>
          <p className="text-green-500">✓ Deployed to Vercel</p>
          <p className="font-bold text-cyan-400">
            ◇ live now{" "}
            <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-cyan-400 align-middle" />
          </p>
        </div>
      </motion.div>

      {/* ------- scroll hint ------- */}
      <motion.div
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-base-content/40"
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