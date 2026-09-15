import { FaCode, FaRocket, FaPaintBrush, FaUsers } from "react-icons/fa";
import GlassCard from "../ui/GlassCard";

const journeyData = [
  {
    icon: <FaCode className="text-3xl text-cyan-400" />,
    title: "The Spark of Curiosity",
    description:
      "My journey began with a simple curiosity about how websites were built. I started with the fundamentals of HTML and CSS, and I was immediately hooked by the ability to create something from scratch.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-pink-500" />,
    title: "Diving into Design",
    description:
      "As I delved deeper, I became fascinated with the design aspect of web development. I learned about UI/UX principles and started using Tailwind CSS to create beautiful and responsive layouts.",
  },
  {
    icon: <FaRocket className="text-3xl text-green-500" />,
    title: "Exploring the MERN Stack",
    description:
      "My passion for building dynamic and interactive applications led me to the MERN stack. I embraced React for the front-end, Node.js and Express for the back-end, and MongoDB for the database.",
  },
  {
    icon: <FaUsers className="text-3xl text-purple-500" />,
    title: "Collaboration and Growth",
    description:
      "I believe in the power of collaboration and continuous learning. I'm always excited to work with talented teams, contribute to innovative projects, and explore new technologies to enhance my skills.",
  },
];

const Journey = () => {
  return (
    <div className="mt-16">
      <h3 className="font-heading text-2xl font-bold text-black dark:text-white lg:text-3xl">
        My <span className="gradient-text">Journey</span>
      </h3>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {journeyData.map((item, index) => (
          <GlassCard
            key={index}
            innerClassName="flex h-full items-start gap-5 p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="flex size-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/60 to-white/30 shadow-md shadow-pink-500/10 dark:from-white/10 dark:to-white/5">
              {item.icon}
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-black dark:text-white lg:text-xl">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Journey;