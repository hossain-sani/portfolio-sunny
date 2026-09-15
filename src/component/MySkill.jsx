import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDaisyui,
  SiMui,
  SiShadcnui,
  SiFramer,
  SiJavascript,
  SiC,
  SiNodedotjs,
  SiExpress,
  SiCplusplus,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiJsonwebtokens,
  SiFirebase,
  SiOpenjdk,
  SiMongodb,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import SectionHeading from "./ui/SectionHeading";

const skillIcons = {
  HTML5: { icon: SiHtml5, color: "text-orange-500" },
  CSS3: { icon: SiCss3, color: "text-blue-500" },
  Tailwind: { icon: SiTailwindcss, color: "text-cyan-500" },
  DaisyUI: { icon: SiDaisyui, color: "text-purple-500" },
  "Material UI": { icon: SiMui, color: "text-blue-400" },
  "Shadcn UI": { icon: SiShadcnui, color: "text-neutral-500 dark:text-gray-300" },
  "Framer Motion": { icon: SiFramer, color: "text-pink-500" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-400" },
  C: { icon: SiC, color: "text-sky-500" },
  Nodejs: { icon: SiNodedotjs, color: "text-green-500" },
  Expressjs: { icon: SiExpress, color: "text-gray-500 dark:text-gray-200" },
  "C ++": { icon: SiCplusplus, color: "text-blue-600" },
  Dart: { icon: SiDart, color: "text-sky-400" },
  Reactjs: { icon: SiReact, color: "text-cyan-400" },
  Nextjs: { icon: SiNextdotjs, color: "text-gray-700 dark:text-gray-100" },
  JWT: { icon: SiJsonwebtokens, color: "text-pink-500" },
  Firebase: { icon: SiFirebase, color: "text-amber-400" },
  Java: { icon: SiOpenjdk, color: "text-red-500" },
  Mongodb: { icon: SiMongodb, color: "text-green-500" },
  Superbase: { icon: SiSupabase, color: "text-emerald-500" },
  SQL: { icon: SiPostgresql, color: "text-indigo-400" },
  Git: { icon: SiGit, color: "text-orange-500" },
  Github: { icon: SiGithub, color: "text-gray-700 dark:text-gray-100" },
  Vercel: { icon: SiVercel, color: "text-gray-700 dark:text-gray-100" },
  Netlify: { icon: SiNetlify, color: "text-teal-500" },
};

const skills = [
  "HTML5", "CSS3", "Tailwind", "DaisyUI", "Material UI", "Shadcn UI", "Framer Motion",
  "JavaScript", "C", "Nodejs", "Expressjs", "C ++", "Dart",
  "Reactjs", "Nextjs", "JWT", "Firebase", "Java", "Mongodb", "Superbase", "SQL",
  "Git", "Github", "Vercel", "Netlify",
];

const rows = [
  skills.slice(0, 13),
  skills.slice(13),
];

const SkillChip = ({ name }) => {
  const meta = skillIcons[name] || { icon: SiReact, color: "text-cyan-400" };
  const Icon = meta.icon;
  return (
    <div className="group mr-5 flex items-center gap-2.5 rounded-full border border-white/40 bg-white/60 px-5 py-2.5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/15 dark:border-white/10 dark:bg-white/5">
      <Icon className={`text-xl ${meta.color}`} />
      <span className="text-sm font-semibold text-black dark:text-white">{name}</span>
    </div>
  );
};

SkillChip.propTypes = {
  name: PropTypes.string.isRequired,
};

const MySkill = () => {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const gradientColor = isDark
    ? "rgba(3, 0, 20, 0.6)"
    : "rgba(255, 255, 255, 0.9)";

  return (
    <div className="text-black dark:text-gray-200">
      <SectionHeading
        eyebrow="Tech Stack"
        title="My"
        highlight="Skills"
        sub="I still have a lot more to learn but these are some of the skills I have acquired along my journey so far."
      />

      <div className="pt-12">
        <Marquee
          pauseOnHover={true}
          gradient
          gradientColor={gradientColor}
          gradientWidth={250}
          speed={90}
        >
          {rows[0].map((item, idx) => (
            <SkillChip key={idx} name={item} />
          ))}
        </Marquee>

        <div className="pt-6">
          <Marquee
            pauseOnHover={true}
            gradient
            gradientColor={gradientColor}
            gradientWidth={250}
            direction="right"
            speed={110}
          >
            {rows[1].map((item, idx) => (
              <SkillChip key={idx} name={item} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MySkill;