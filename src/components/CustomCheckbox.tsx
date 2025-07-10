
import React from 'react';

interface CustomCheckboxProps {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id, label, description, checked, onChange, className = '', disabled = false }) => {
  return (
    <label htmlFor={id} className={`flex items-start ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className}`}>
      <input
        id={id}
        aria-describedby={`${id}-description`}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => !disabled && onChange(e.target.checked)}
        className="sr-only peer"
        disabled={disabled}
      />
      <div className="relative flex-shrink-0 w-11 h-6 bg-stone-400 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-offset-amber-100 peer-focus:ring-orange-700 peer-checked:bg-orange-800 transition-colors duration-200 ease-in-out mt-0.5">
        <span
          aria-hidden="true"
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${checked ? 'transform translate-x-5' : ''}`}
        ></span>
      </div>
      <div className="ml-3 text-sm">
        <span className="font-title font-bold text-stone-900">{label}</span>
        <p id={`${id}-description`} className="text-xs text-stone-600">{description}</p>
      </div>
    </label>
  );
};
