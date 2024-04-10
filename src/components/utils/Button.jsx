import React from "react";

function Button({ onClick, children, className, ...props }) {
  return (
    <button
    
      className={` bg-[#EA4B8B] p-2 rounded-md font-medium text-white ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
