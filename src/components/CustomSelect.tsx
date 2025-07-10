
import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../constants/icons';

export interface Option {
  value: string | number;
  label: string | React.ReactNode;
  disabled?: boolean;
}

export interface OptionGroup {
  label: string;
  options: Option[];
}

function isOptionGroup(item: Option | OptionGroup): item is OptionGroup {
  return 'options' in item;
}

interface CustomSelectProps {
  id: string;
  label: string;
  options: (Option | OptionGroup)[];
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ id, label, options, value, onChange, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  let selectedOption: Option | undefined;
  for (const item of options) {
    if (isOptionGroup(item)) {
      const found = item.options.find(opt => opt.value === value);
      if (found) {
        selectedOption = found;
        break;
      }
    } else {
      if ((item as Option).value === value) {
        selectedOption = item as Option;
        break;
      }
    }
  }

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

  const renderOption = (option: Option, isGrouped: boolean) => (
    <li
      key={option.value}
      id={`option-${id}-${option.value}`}
      role="option"
      aria-selected={value === option.value}
      onClick={() => !option.disabled && handleSelect(option.value)}
      className={`cursor-pointer select-none relative py-2 pr-9 transition-colors ${
        isGrouped ? 'pl-6' : 'pl-3'
      } ${
        option.disabled 
          ? 'text-stone-400 cursor-not-allowed'
          : 'text-stone-900 hover:bg-amber-100'
      } ${value === option.value ? 'bg-amber-200 font-semibold' : ''}`}
    >
      <span className={`block truncate ${value === option.value ? 'font-semibold' : 'font-normal'}`}>{option.label}</span>
    </li>
  );

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
          {options.map((item) => {
            if (isOptionGroup(item)) {
              return (
                <React.Fragment key={item.label}>
                  <li className="px-3 py-2 text-xs font-bold text-stone-500 uppercase tracking-wider bg-amber-100">
                    {item.label}
                  </li>
                  {item.options.map(option => renderOption(option, true))}
                </React.Fragment>
              );
            }
            return renderOption(item as Option, false);
          })}
        </ul>
      )}
    </div>
  );
};
