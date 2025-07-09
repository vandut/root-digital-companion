import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../constants/icons';

interface Option {
  value: string | number;
  label: string | React.ReactNode;
  disabled?: boolean;
}

interface CustomSelectProps {
  id: string;
  label: string;
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ id, label, options, value, onChange, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);


  const handleSelect = (newValue: string | number) => {
    onChange(newValue);
    setIsOpen(false);
  }

  return (
    <div className={`relative ${className}`} ref={wrapperRef}>
      <label htmlFor={id} className="block text-sm font-medium text-stone-700 mb-1">{label}</label>
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="relative w-full text-left bg-amber-200/80 border-2 border-amber-800/50 rounded-lg shadow-inner py-2 px-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-700"
      >
        <span className="block truncate text-stone-800">{selectedOption ? selectedOption.label : 'Select...'}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-stone-700">
           <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
             {ICONS.CHEVRON_DOWN}
           </span>
        </span>
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-amber-50 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-stone-900/5 overflow-auto focus:outline-none sm:text-sm"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              id={`option-${id}-${option.value}`}
              role="option"
              aria-selected={value === option.value}
              onClick={() => !option.disabled && handleSelect(option.value)}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 transition-colors ${
                option.disabled 
                  ? 'text-stone-400 cursor-not-allowed'
                  : 'text-stone-900 hover:bg-amber-100'
              } ${value === option.value ? 'bg-amber-200 font-semibold' : ''}`}
            >
              <span className={`block truncate ${value === option.value ? 'font-semibold' : 'font-normal'}`}>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
