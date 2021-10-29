import React from "react";
import './style.css';

const Input = ({label, ...props}) => {
  return (
    <div className='ui_input_container'>
      <label className="ui_label">{label}</label>
      <input className="ui_input" {...props} autoComplete="off" required />
    </div>
  );
};

export default Input;
