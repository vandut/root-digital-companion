
import React, { useState } from 'react';
import { Faction, GamePhase, FactionAction, OrderType } from '../constants/types';
import { Card } from './Card';
import { ICONS } from '../constants/icons';
import { ExpandableFactionAction } from './ExpandableFactionAction';

interface FactionDetailProps {
  faction: Faction;
  isExpandable?: boolean;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="font-title text-lg sm:text-xl font-bold text-orange-900 border-b-2 border-orange-800 pb-2 mb-3">{title}</h3>
        <div className="text-stone-700 space-y-2 leading-relaxed">
            {children}
        </div>
    </div>
);

const AbilityItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="mb-2">
        <p><strong className="font-semibold text-stone-900">{title}:</strong> {description}</p>
    </div>
);

export const FactionDetail: React.FC<FactionDetailProps> = ({ faction, isExpandable = true }) => {
  const [openAction, setOpenAction] = useState<string | null>(null);
  const [isSetupExpanded, setIsSetupExpanded] = useState(false);

  return (
    <div>
        <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">{faction.name}</h2>
            <p className="text-stone-600 italic mt-1">{faction.tagline}</p>
            <div className="mt-3 text-sm text-stone-800">
                <span className="font-semibold">Reach:</span> {faction.reach}
                <span className="mx-2 text-stone-400">|</span>
                <span className="font-semibold">Type:</span>{' '}
                <span className={faction.type === 'Militant' ? 'text-red-700' : 'text-green-700'}>
                    {faction.type}
                </span>
            </div>
        </div>

        <DetailSection title="How to Win">
            <p>{faction.howToWin}</p>
        </DetailSection>

        <DetailSection title="Special Abilities">
            {faction.specialAbilities.map(ability => (
                <AbilityItem key={ability.title} title={ability.title} description={ability.description} />
            ))}
        </DetailSection>

        <div className="mb-6">
            <button
                onClick={() => setIsSetupExpanded(!isSetupExpanded)}
                className={`w-full text-left flex justify-between items-center p-3 transition-colors duration-200 bg-[#F1E9DA] focus:outline-none focus:ring-0 ${isSetupExpanded ? 'rounded-t-lg' : 'rounded-lg'}`}
                aria-expanded={isSetupExpanded}
                aria-controls="setup-details"
            >
                <p className="font-bold text-stone-800 text-base sm:text-lg">Show Faction Setup</p>
                <span className={`transform transition-transform duration-200 flex-shrink-0 text-stone-700 ${isSetupExpanded ? 'rotate-180' : ''}`}>
                    {ICONS.CHEVRON_DOWN}
                </span>
            </button>
            {isSetupExpanded && (
                <div id="setup-details" onClick={() => setIsSetupExpanded(false)} className="bg-[#F1E9DA] p-3 rounded-b-lg text-stone-700 cursor-pointer">
                    <div className="pl-4 border-l-2 border-orange-800">
                        <ol className="list-decimal list-inside space-y-2">
                            {faction.setup.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}
        </div>
        
        <DetailSection title="Mechanics">
            <p>{faction.mechanics}</p>
        </DetailSection>

        <DetailSection title="How to Play">
            <p>{faction.howToPlay}</p>
        </DetailSection>

        <DetailSection title="Strategy">
            <p>{faction.strategy}</p>
        </DetailSection>

        <DetailSection title="Turn Breakdown">
            <div className="space-y-4">
                {[GamePhase.BIRDSONG, GamePhase.DAYLIGHT, GamePhase.EVENING].map(phase => {
                    let orderedActionCounter = 1;
                    return (
                        <div key={phase} className="bg-[#EAE1D2] p-4 rounded-lg">
                            <h4 className="font-title text-base sm:text-lg font-bold text-stone-800 mb-2">{phase}</h4>
                            <div className="space-y-3">
                                {faction.turn[phase].actions.map((action) => {
                                    const number = action.order === OrderType.ORDERED ? orderedActionCounter++ : null;
                                    const listMarker = action.order === OrderType.ORDERED ? (
                                        <span className="font-title font-bold text-3xl text-amber-800 leading-tight">
                                            {number}.
                                        </span>
                                    ) : (
                                        <span className="h-9 flex items-center">
                                            {ICONS.BULLET}
                                        </span>
                                    );
                                    const actionKey = `${phase}-${action.title}`;

                                    if (isExpandable) {
                                        return (
                                            <ExpandableFactionAction 
                                                key={actionKey}
                                                action={action}
                                                listMarker={listMarker}
                                                isExpanded={openAction === actionKey}
                                                onToggle={() => setOpenAction(openAction === actionKey ? null : actionKey)}
                                            />
                                        );
                                    } else {
                                        return (
                                            <div key={action.title} className="flex items-center gap-3">
                                                <div className="flex-shrink-0 w-8 flex justify-center">
                                                    {listMarker}
                                                </div>
                                                <p className="flex-1">
                                                    <strong className="font-semibold">{action.title}:</strong> {action.description}
                                                </p>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </DetailSection>
    </div>
  );
};
