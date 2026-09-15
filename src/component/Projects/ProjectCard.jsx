import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import GlassCard from "../ui/GlassCard";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold text-cyan-600 transition-all duration-300 hover:bg-cyan-400/25 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300";

const ProjectCard = ({ project }) => {
  const { title, type, image, tech, features, demo, client, server } = project;

  return (
    <motion.div
      whileHover={{ rotateY: 8, rotateX: -5, scale: 1.02 }}
      style={{ transformPerspective: 1200 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="h-full"
    >
      <GlassCard innerClassName="group flex h-full flex-col">
        <figure className="relative h-52 overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute left-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-pink-500/30">
              {type}
            </span>
          </div>
          <div className="absolute bottom-3 right-3 flex size-9 translate-y-2 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <FaArrowUpRightFromSquare className="text-sm text-black" />
          </div>
        </figure>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-heading text-xl font-bold text-black dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-relaxed text-black/60 dark:text-gray-300">
            <span className="font-semibold text-black/80 dark:text-gray-100">
              Technologies:
            </span>{" "}
            {tech.join(", ")}
          </p>

          <ul className="mt-3 flex-1 space-y-1.5 text-xs leading-relaxed text-black/70 dark:text-gray-200">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-pink-500">▸</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-black/5 pt-4 dark:border-white/10">
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className={linkClass}>
                <FiExternalLink className="text-xs" />
                Live Demo
              </a>
            )}
            {client && (
              <a href={client} target="_blank" rel="noreferrer" className={linkClass}>
                <FaCode className="text-xs" />
                Client
              </a>
            )}
            {server && (
              <a href={server} target="_blank" rel="noreferrer" className={linkClass}>
                <FaCode className="text-xs" />
                Server
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string,
    client: PropTypes.string,
    server: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;