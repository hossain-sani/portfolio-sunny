import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * Glassmorphism card with a soft gradient glow on hover.
 * Accepts the same motion props (initial / whileInView / ...).
 */
const GlassCard = ({ children, className = "", innerClassName = "", ...props }) => {
  return (
    <motion.div
      {...props}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-cyan-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-cyan-500/20" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 size-40 rounded-full bg-pink-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-pink-500/20" />
      <div className={`relative ${innerClassName}`}>{children}</div>
    </motion.div>
  );
};

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
};

export default GlassCard;