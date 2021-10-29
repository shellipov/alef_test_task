import React from "react";
import './style.css'

const Button = ({ children, styleType, ...props }) => {
  return <button className={`ui_button ${styleType}`} {...props}>{children}</button>;
};

export default Button;
