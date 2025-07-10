import React, { ReactNode } from 'react';

interface StyledButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'icon';
}

export const StyledButton: React.FC<StyledButtonProps> = ({ onClick, children, disabled = false, className = '', variant = 'primary' }) => {
  const baseClasses = 'text-sm sm:text-base font-title font-bold rounded-lg shadow-md transition-all duration-200 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-50';
  
  const variantClasses = {
    primary: 'py-2 px-4 sm:px-6 bg-orange-800 text-stone-100 hover:bg-orange-900 focus:ring-orange-700 disabled:bg-stone-400 disabled:cursor-not-allowed',
    secondary: 'py-2 px-4 sm:px-6 bg-stone-600 text-stone-100 hover:bg-stone-700 focus:ring-stone-500 disabled:bg-stone-400',
    icon: 'p-2 rounded-full bg-stone-700 text-stone-100 hover:bg-stone-800 focus:ring-stone-600 disabled:bg-stone-400'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};