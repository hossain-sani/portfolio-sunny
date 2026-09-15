import PropTypes from "prop-types";

const baseClass =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 bg-[length:200%_auto] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all duration-500 hover:bg-[position:right_center] hover:shadow-xl hover:shadow-pink-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 disabled:pointer-events-none disabled:opacity-60";

const Shine = () => (
  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
);

/**
 * Modern gradient pill button with hover shine sweep.
 */
const GradientButton = ({
  children,
  className = "",
  href,
  download,
  target,
  rel,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}) => {
  const cls = `${baseClass} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
        className={cls}
      >
        {children}
        <Shine />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={cls}>
      {children}
      <Shine />
    </button>
  );
};

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default GradientButton;