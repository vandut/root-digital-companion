
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', padding = 'p-4 sm:p-6' }) => {
  return (
    <div className={`bg-[#F1E9DA] border border-stone-400 rounded-lg shadow-xl ${padding} ${className}`}>
      {children}
    </div>
  );
};
