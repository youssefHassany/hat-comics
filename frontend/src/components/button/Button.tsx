import React from "react";

interface ButtonType extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, onClick }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`text-lg text-white font-medium bg-teal-900 p-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
