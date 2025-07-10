
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { StyledButton } from '../components/StyledButton';
import { useGame } from '../hooks/useGame';
import { Player } from '../types';
import { Faction, FactionId, GamePhase } from '../constants/types';
import { FACTIONS } from '../constants/factions';
import { REACH_RECOMMENDATIONS } from '../constants/game';
import { CustomSelect, Option, OptionGroup } from '../components/CustomSelect';
import { CustomTextInput } from '../components/CustomTextInput';
import { IMAGES } from '../constants/images';

export const NewGameSetup: React.FC = () => {
    const navigate = useNavigate();
    const { startNewGame } = useGame();
    const [step, setStep] = useState(1);
    const [numPlayers, setNumPlayers] = useState(2);
    const [players, setPlayers] = useState<Partial<Player>[]>(
        Array(2).fill({}).map((_, i) => ({ name: `Player ${i + 1}`, factionId: undefined }))
    );
    const [map, setMap] = useState<'Fall/Winter' | 'Lake/Mountain'>('Fall/Winter');

    const handleNumPlayersChange = (count: number) => {
        setNumPlayers(count);
        const currentPlayers = [...players];
        const newPlayers = Array(count).fill({}).map((_, i) => 
            currentPlayers[i] || { name: `Player ${i + 1}`, factionId: undefined }
        );
        setPlayers(newPlayers.slice(0, count));
    };

    const handlePlayerNameChange = (index: number, name: string) => {
        const newPlayers = [...players];
        newPlayers[index] = { ...newPlayers[index], name };
        setPlayers(newPlayers);
    };

    const handleFactionSelect = (playerIndex: number, factionId: FactionId) => {
        const newPlayers = [...players];
        newPlayers[playerIndex] = { ...newPlayers[playerIndex], factionId };
        setPlayers(newPlayers);
    };

    const totalReach = useMemo(() => {
        return players.reduce((sum, player) => {
            if (player.factionId) {
                return sum + FACTIONS[player.factionId].reach;
            }
            return sum;
        }, 0);
    }, [players]);

    const recommendedReach = REACH_RECOMMENDATIONS[numPlayers] || 17;
    
    const finalizeSetup = () => {
        const finalPlayers = players.map((p, i) => ({
            id: `p${i+1}`,
            name: p.name || `Player ${i+1}`,
            factionId: p.factionId!,
            score: 0,
        })) as Player[];

        startNewGame({
            players: finalPlayers,
            map,
            currentPlayerIndex: 0,
            currentPhase: GamePhase.BIRDSONG,
        });
        navigate('/game');
    };
    
    const getFactionOptionsForPlayer = (playerIndex: number) => {
        const otherPlayersFactions = players
            .filter((_p, i) => i !== playerIndex)
            .map(p => p.factionId)
            .filter(Boolean);

        const availableToThisPlayer = Object.values(FACTIONS)
            .filter(f => !otherPlayersFactions.includes(f.id as any));

        const mapFactionToOption = (faction: Faction): Option => ({
            value: faction.id,
            label: (
                <>
                    <span className={faction.type === 'Militant' ? 'text-red-700' : 'text-green-700'}>
                        {faction.name}
                    </span>
                    <span className="text-stone-600"> (R: {faction.reach})</span>
                </>
            )
        });

        const militants: Option[] = availableToThisPlayer
            .filter(f => f.type === 'Militant')
            .map(mapFactionToOption);
            
        const insurgents: Option[] = availableToThisPlayer
            .filter(f => f.type === 'Insurgent')
            .map(mapFactionToOption);

        const options: (Option | OptionGroup)[] = [
            { value: '', label: 'Select a faction', disabled: true },
        ];

        if (militants.length > 0) {
            options.push({
                label: 'Militant',
                options: militants,
            });
        }

        if (insurgents.length > 0) {
            options.push({
                label: 'Insurgent',
                options: insurgents,
            });
        }

        return options;
    };

    const renderStep = () => {
        switch (step) {
            case 1: // Players & Map
                const numPlayerOptions = [2, 3, 4, 5, 6].map(n => ({ value: n, label: `${n}` }));
                const mapOptions = [
                    { value: 'Fall/Winter', label: 'Fall/Winter' },
                    { value: 'Lake/Mountain', label: 'Lake/Mountain' },
                ];
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">Step 1: Players & Map</h2>
                        <div className="space-y-4">
                            <CustomSelect
                                id="numPlayers"
                                label="Number of Players"
                                options={numPlayerOptions}
                                value={numPlayers}
                                onChange={(val) => handleNumPlayersChange(val as number)}
                            />
                             <CustomSelect
                                id="map"
                                label="Map"
                                options={mapOptions}
                                value={map}
                                onChange={(val) => setMap(val as any)}
                            />
                            {players.map((_, index) => (
                                <CustomTextInput
                                    key={index}
                                    id={`player${index}`}
                                    label={`Player ${index + 1} Name`}
                                    value={players[index]?.name || ''}
                                    onChange={value => handlePlayerNameChange(index, value)}
                                    placeholder={`Player ${index + 1}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-4 mt-8">
                           <StyledButton onClick={() => navigate('/', { replace: true })} variant="secondary" className="w-full">Cancel</StyledButton>
                           <StyledButton onClick={() => setStep(2)} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            case 2: // Faction Selection
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-2 uppercase tracking-wider text-stone-900">Step 2: Factions</h2>
                        <p className="mb-4 text-stone-700">Total Reach: <span className={`font-bold ${totalReach < recommendedReach ? 'text-red-600' : 'text-green-600'}`}>{totalReach}</span> / {recommendedReach}+ Recommended</p>
                        {players.map((player, index) => {
                            const factionOptions = getFactionOptionsForPlayer(index);
                            return (
                                <div key={index} className="mb-4">
                                     <CustomSelect
                                        id={`faction-select-${index}`}
                                        label={player.name || `Player ${index + 1}`}
                                        options={factionOptions}
                                        value={player.factionId || ''}
                                        onChange={val => handleFactionSelect(index, val as FactionId)}
                                    />
                                </div>
                            );
                        })}
                         <div className="flex gap-4 mt-8">
                            <StyledButton onClick={() => setStep(1)} variant="secondary" className="w-full">Back</StyledButton>
                            <StyledButton onClick={() => setStep(3)} className="w-full" disabled={players.some(p => !p.factionId)}>Next</StyledButton>
                        </div>
                    </div>
                );
            case 3: // Faction-Specific Setup
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">Step 3: Setup</h2>
                        <p className="text-stone-700 mb-4">Follow these instructions for each player in turn order.</p>
                        <div className="space-y-4 max-h-80 sm:max-h-96 overflow-y-auto pr-2">
                           {players.map((player, index) => (
                                <Card key={index} padding="p-4" className="bg-amber-100/60">
                                    <h3 className="font-bold text-lg text-stone-900">{player.name}: The {FACTIONS[player.factionId!].name}</h3>
                                    <ol className="list-decimal list-inside mt-2 space-y-1 text-stone-800">
                                        {FACTIONS[player.factionId!].setup.map((stepText, i) => (
                                            <li key={i}>{stepText}</li>
                                        ))}
                                    </ol>
                                </Card>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-8">
                            <StyledButton onClick={() => setStep(2)} variant="secondary" className="w-full">Back</StyledButton>
                            <StyledButton onClick={() => setStep(4)} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            case 4: // Finalize
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">Step 4: Finalize</h2>
                        <div className="space-y-3 text-stone-800">
                           <p>Each player draws 3 cards.</p>
                           <p>Place a ruin in each slot on the map marked with an 'R'.</p>
                           <p>The first player is <strong>{players[0]?.name || 'Player 1'}</strong>.</p>
                        </div>
                        <div className="flex gap-4 mt-8">
                           <StyledButton onClick={() => setStep(3)} variant="secondary" className="w-full">Back</StyledButton>
                           <StyledButton onClick={finalizeSetup} className="w-full">Start Game!</StyledButton>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${IMAGES.BACKDROP_MAIN_MENU}')` }}>
            <div className="bg-amber-50/80 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl w-11/12 sm:w-full max-w-lg border-4 border-stone-800">
                {renderStep()}
            </div>
        </div>
    );
};
