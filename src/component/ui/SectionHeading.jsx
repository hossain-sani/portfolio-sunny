import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * Shared section heading: eyebrow badge + gradient-highlighted title
 * + animated underline + optional sub-text.
 */
const SectionHeading = ({ eyebrow, title, highlight, sub, align = "center" }) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const itemClass =
    align === "center"
      ? "mx-auto"
      : "ml-0";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500 dark:text-pink-400"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-4 font-heading text-3xl font-bold tracking-tight text-black dark:text-white lg:text-5xl"
      >
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>

      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className={`section-underline mt-4 ${itemClass}`}
      />

      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-4 text-sm leading-relaxed text-black/60 dark:text-gray-300 lg:text-base"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
};

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  sub: PropTypes.string,
  align: PropTypes.oneOf(["center", "left"]),
};

export default SectionHeading;