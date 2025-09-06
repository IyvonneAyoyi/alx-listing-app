// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
