import React from 'react';

interface CustomTextInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({ id, label, value, onChange, placeholder, className = '' }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-stone-700 mb-1">{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-stone-800 bg-amber-200/80 border-2 border-amber-800/50 rounded-lg shadow-inner py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-700 placeholder:text-stone-500/80"
      />
    </div>
  );
};
