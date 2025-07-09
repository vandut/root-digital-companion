
import React from 'react';
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
        <h3 className="font-title text-xl font-bold text-orange-900 border-b-2 border-orange-800 pb-2 mb-3">{title}</h3>
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
  return (
    <div>
        <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-stone-900">{faction.name}</h2>
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

        <DetailSection title="How to Play">
            <p>{faction.howToPlay}</p>
        </DetailSection>

        <DetailSection title="Strategy">
            <p>{faction.strategy}</p>
        </DetailSection>

        <DetailSection title="Special Abilities">
            {faction.specialAbilities.map(ability => (
                <AbilityItem key={ability.title} title={ability.title} description={ability.description} />
            ))}
        </DetailSection>

        <DetailSection title="Setup">
            <ol className="list-decimal list-inside space-y-2">
                {faction.setup.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </DetailSection>

        <DetailSection title="Turn Breakdown">
            <div className="space-y-4">
                {[GamePhase.BIRDSONG, GamePhase.DAYLIGHT, GamePhase.EVENING].map(phase => {
                    let orderedActionCounter = 1;
                    return (
                        <div key={phase} className="bg-[#EAE1D2] p-4 rounded-lg">
                            <h4 className="font-title text-lg font-bold text-stone-800 mb-2">{phase}</h4>
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

                                    if (isExpandable) {
                                        return (
                                            <ExpandableFactionAction 
                                                key={action.title}
                                                action={action}
                                                listMarker={listMarker}
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