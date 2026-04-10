import { Link } from "react-router-dom";

const variants = {
  primary: "bg-brand-red text-white hover:bg-red-600",
  secondary: "bg-brand-green text-white hover:bg-brand-pine",
  outline: "border border-brand-green/20 bg-white text-brand-green hover:border-brand-green hover:bg-brand-green/5",
  ghost: "bg-transparent text-brand-green hover:bg-brand-green/5"
};

function Button({ children, className = "", href, target, to, type = "button", variant = "primary", ...rest }) {
  const baseClassName =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 " +
    variants[variant] +
    ` ${className}`;

  if (to) {
    return (
      <Link className={baseClassName} to={to} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={baseClassName} href={href} rel={target === "_blank" ? "noreferrer" : undefined} target={target} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClassName} type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
