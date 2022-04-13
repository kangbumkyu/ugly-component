import React from "react";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  color?: string;
  padding?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({
  label,
  size = "medium",
  backgroundColor,
  color,
  padding,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`ugly-button ugly-button--${size}`}
      style={{ backgroundColor, color, padding }}
      onClick={onClick}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
