
import React, { useState } from 'react';
import { ICONS } from '../constants/icons';

interface CollapsibleInfoProps {
  content: { summary: string; details: string[] };
}

export const CollapsibleInfo: React.FC<CollapsibleInfoProps> = ({ content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const id = `collapsible-${content.summary.replace(/\s+/g, '-')}`;

    return (
        <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 bg-[#F1E9DA] p-3 rounded-lg w-full text-left"
            aria-expanded={isExpanded}
            aria-controls={id}
        >
            <div className="flex justify-between items-center">
                <p className="font-semibold text-stone-800">{content.summary}</p>
                <span className={`transform transition-transform duration-200 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                    {ICONS.CHEVRON_DOWN}
                </span>
            </div>
            {isExpanded && (
                <div id={id} className="mt-3 pl-4 pr-2 pb-2 space-y-3 text-stone-700 border-l-2 border-orange-800">
                    {content.details.map((detail, index) => <p key={index}>{detail}</p>)}
                </div>
            )}
        </button>
    );
};
