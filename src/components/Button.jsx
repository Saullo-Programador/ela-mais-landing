
import React from "react";
import "../styles/Button.css";

const Button = ({
  children,
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconPosition = "left",
  href,
  target,
  rel,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = "",
  ...props
}) => {

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      type={!href ? props.type || "button" : undefined}
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn btn-${variant} btn-${size} ${
        fullWidth ? "btn-full" : ""
      } ${className}`}
      {...props}
    >
      {loading ? (
        "Carregando..."
      ) : (
        <>
          {IconLeft && <IconLeft size={18} />}

          {children}

          {IconRight && <IconRight size={18} />}
        </>
      )}
    </Component>
  );
};

export default Button;
