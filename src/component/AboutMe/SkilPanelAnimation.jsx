import { motion } from "framer-motion";

const skillsData = {
  "Back-end": [
    { name: "Node.js", percent: 60 },
    { name: "Express.js", percent: 65 },
    { name: "Mongodb", percent: 70 },
    { name: "MySql", percent: 40 },
  ],
  "Front-end": [
    { name: "HTML5", percent: 90 },
    { name: "Tailwind CSS", percent: 85 },
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 75 },
  ],
  Tools: [
    { name: "Git & GitHub", percent: 65 },
    { name: "Vercel", percent: 60 },
    { name: "Netlify", percent: 70 },
    { name: "Firebase", percent: 70 },
  ],
  "Soft Skill": [
    { name: "Communication", percent: 80 },
    { name: "Teamwork", percent: 75 },
    { name: "Problem Solving", percent: 70 },
    { name: "Time Management", percent: 65 },
  ],
};

const barVariants = {
  initial: { width: 0 },
  animate: (percent) => ({
    width: `${percent}%`,
    transition: { duration: 1, ease: "easeInOut" },
  }),
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 1, ease: "easeOut" },
  }),
};

// eslint-disable-next-line react/prop-types
export default function SkillPanelAnimation({ category }) {
  const skills = skillsData[category] || [];

  return (
    <div className="mt-5 w-full rounded-2xl border border-white/40 bg-white/60 p-4 text-black shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white">
      <motion.h2
        className="mb-4 flex items-center justify-between border-b border-black/10 pb-2 font-heading text-lg font-bold text-black dark:border-white/10 dark:text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="gradient-text">{category}</span>
        <span className="text-xs font-semibold uppercase tracking-widest text-black/50 dark:text-gray-400">
          skills
        </span>
      </motion.h2>

      {skills.map((skill, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={rowVariants}
          className="mb-4 last:mb-0"
        >
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="font-medium">{skill.name}</span>
            <span className="font-bold text-pink-500">{skill.percent}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
            <motion.div
              className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 shadow-sm shadow-pink-500/30"
              variants={barVariants}
              initial="initial"
              animate="animate"
              custom={skill.percent}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}