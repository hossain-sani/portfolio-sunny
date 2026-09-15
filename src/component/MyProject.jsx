import { motion } from "framer-motion";
import ProjectCard from "./Projects/ProjectCard";
import SectionHeading from "./ui/SectionHeading";
import projects from "../data/projects";

const MyProject = () => {
  return (
    <div>
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected"
        highlight="Projects"
        sub="A collection of work that shows how I turn ideas into fast, accessible and scalable web experiences."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={index === 0 ? "md:col-span-2 xl:col-span-1" : ""}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;