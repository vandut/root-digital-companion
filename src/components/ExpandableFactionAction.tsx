
import React from 'react';
import { FactionAction } from '../constants/types';
import { ICONS } from '../constants/icons';

interface ExpandableFactionActionProps {
  action: FactionAction;
  listMarker: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExpandableFactionAction: React.FC<ExpandableFactionActionProps> = ({ action, listMarker, isExpanded, onToggle }) => {
  const actionId = `action-details-${action.title.replace(/\s+/g, '-')}`;

  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-8 flex justify-center pt-3">{listMarker}</div>
      <div className="flex-1">
        <button
          onClick={onToggle}
          className={`w-full text-left flex justify-between items-center p-3 transition-colors duration-200 bg-[#F1E9DA] focus:outline-none focus:ring-0 ${isExpanded ? 'rounded-t-lg' : 'rounded-lg'}`}
          aria-expanded={isExpanded}
          aria-controls={actionId}
        >
          <div className="pr-4">
            <p className="font-bold text-stone-800 text-base sm:text-lg">{action.title}</p>
            <p className="text-sm text-stone-600">{action.description}</p>
          </div>
          <span className={`transform transition-transform duration-200 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
            {ICONS.CHEVRON_DOWN}
          </span>
        </button>
        {isExpanded && (
          <div id={actionId} onClick={onToggle} className="bg-[#F1E9DA] p-3 rounded-b-lg text-stone-700 cursor-pointer">
            <div className="pl-4 border-l-2 border-orange-800 space-y-3">
              {action.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};