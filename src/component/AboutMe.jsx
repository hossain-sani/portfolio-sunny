import { useEffect, useState } from "react";
import sunnyImg from "../assets/sani_long.png";
import Education from "./AboutMe/Education";
import { motion } from "framer-motion";
import SkillPanelAnimation from "./AboutMe/SkilPanelAnimation";
import Journey from "./AboutMe/Journey";
import {
  FaLightbulb,
  FaPaintBrush,
  FaGamepad,
  FaGithub,
  FaRss,
  FaLaptopCode,
  FaUsers,
  FaGlobeAmericas,
  FaCogs,
} from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";

const categories = ["Front-end", "Back-end", "Tools", "Soft Skill"];

const philosophies = [
  {
    icon: FaLightbulb,
    iconClass: "text-yellow-400",
    title: "Clean and Efficient Code",
    text: "I believe that writing clean, efficient, and maintainable code is the foundation of any successful project. I strive to follow best practices and coding standards to ensure the quality of my work.",
  },
  {
    icon: FaPaintBrush,
    iconClass: "text-pink-500",
    title: "User-Centric Design",
    text: "I am passionate about creating intuitive and engaging user experiences. I focus on understanding the needs of the end-users to build applications that are not only functional but also enjoyable to use.",
  },
  {
    icon: FaCogs,
    iconClass: "text-gray-500 dark:text-gray-300",
    title: "Sustainable Development",
    text: "I prioritize building robust and scalable solutions that are easy to maintain and integrate within larger systems. My goal is to deliver long-term value and contribute effectively to team-driven projects.",
  },
];

const hobbies = [
  { icon: FaGamepad, iconClass: "text-purple-500", title: "Gaming" },
  { icon: FaGithub, iconClass: "text-gray-700 dark:text-gray-300", title: "Open Source" },
  { icon: FaRss, iconClass: "text-orange-500", title: "Tech Blogs" },
  { icon: FaLaptopCode, iconClass: "text-blue-500", title: "Side Projects" },
  { icon: FaUsers, iconClass: "text-green-500", title: "Time with Friends" },
  { icon: FaGlobeAmericas, iconClass: "text-indigo-500", title: "Exploring & Travel" },
];

const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-black dark:text-gray-200">
      <SectionHeading
        eyebrow="Know Me"
        title="About"
        highlight="me"
        sub="A quick look at who I am, how I work and what I enjoy building."
      />

      {/* first part */}
      <div className="flex flex-col items-center justify-between gap-12 pt-14 lg:flex-row">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-[85%] lg:w-[38%]"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-500/60 via-pink-500/60 to-cyan-500/60 p-px">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/20 bg-white/50 backdrop-blur-xl dark:bg-[#0a0920]/50">
              <img src={sunnyImg} alt="sani image" className="w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-100/30 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* right */}
        <div className="w-full lg:w-[58%]">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-start text-sm leading-relaxed"
          >
            <p>
              A dedicated Frontend React Developer passionate about creating dynamic and responsive web applications. With a solid foundation in MongoDB, Express.js, React, JavaScript, Node.js, & Next JS, I bring a comprehensive approach to building full-stack solutions.
              <br />
              <br />
              I consider myself a quick learner, self-motivated, responsible, and disciplined person who can work under pressure and solve problems in critical situations with analytical knowledge and the latest technology.
            </p>
          </motion.div>

          {/* skill */}
          <div className="mt-6">
            <h3 className="font-heading text-2xl font-bold text-black dark:text-white">
              Technical <span className="gradient-text">Proficiency</span>
            </h3>
            <div>
              <SkillPanelAnimation category={categories[activeIndex]} />
            </div>
          </div>
        </div>
      </div>

      {/* second part — education */}
      <div className="mt-16">
        <h3 className="font-heading text-2xl font-bold text-black dark:text-white lg:text-3xl">
          Education <span className="gradient-text">Qualifications</span>
        </h3>
        <div className="mt-8">
          <Education />
        </div>
      </div>

      {/* My Journey Section */}
      <Journey />

      {/* My Philosophy Section */}
      <div className="mt-16">
        <h3 className="font-heading text-2xl font-bold text-black dark:text-white lg:text-3xl">
          My <span className="gradient-text">Philosophy</span>
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {philosophies.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={index}
                innerClassName="h-full p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`text-4xl ${item.iconClass}`}>
                  <Icon />
                </div>
                <h4 className="mt-4 font-heading text-lg font-bold text-black dark:text-white lg:text-xl">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-gray-300">
                  {item.text}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Interests & Hobbies Section */}
      <div className="mt-16">
        <h3 className="font-heading text-2xl font-bold text-black dark:text-white lg:text-3xl">
          Interests & <span className="gradient-text">Hobbies</span>
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={index}
                className="text-center"
                innerClassName="p-8"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`text-5xl ${item.iconClass}`}>
                  <Icon />
                </div>
                <h4 className="mt-4 font-heading text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h4>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;