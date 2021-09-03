import React from 'react';

const Button = ({ type, onClick, children }) => {
  return (
    <button
      className={`${
        type || ''
      } rounded-full leading-none shadow-lg transition-all px-8 md:px-16 py-4 font-bold text-sm md:text-base`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
