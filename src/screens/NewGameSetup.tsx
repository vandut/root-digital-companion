
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { StyledButton } from '../components/StyledButton';
import { useGame } from '../hooks/useGame';
import { Player } from '../types';
import { Faction, FactionId, GamePhase, LibraryContentBlock } from '../constants/types';
import { FACTIONS } from '../constants/factions';
import { REACH_RECOMMENDATIONS } from '../constants/game';
import { CustomSelect, Option, OptionGroup } from '../components/CustomSelect';
import { CustomTextInput } from '../components/CustomTextInput';
import { IMAGES } from '../constants/images';
import { CustomCheckbox } from '../components/CustomCheckbox';
import { landmarks } from '../constants/library/landmarks';
import { hirelings } from '../constants/library/hirelings';
import { variantMaps } from '../constants/library/variantMaps';
import { setup as advancedSetupRules } from '../constants/library/advancedSetup';
import { exilesAndPartisansDeck } from '../constants/library/exilesAndPartisansDeck';

export const NewGameSetup: React.FC = () => {
    const navigate = useNavigate();
    const { startNewGame } = useGame();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [numPlayers, setNumPlayers] = useState(2);
    const [players, setPlayers] = useState<Partial<Player>[]>(
        Array(2).fill({}).map((_, i) => ({ name: `Player ${i + 1}`, factionId: undefined }))
    );
    const [map, setMap] = useState<'Fall' | 'Winter' | 'Lake' | 'Mountain'>('Fall');
    const [useLandmarks, setUseLandmarks] = useState(false);
    const [useHirelings, setUseHirelings] = useState(false);
    const [useAdvancedSetup, setUseAdvancedSetup] = useState(false);
    const [usePartisansDeck, setUsePartisansDeck] = useState(false);

    const handleAdvancedSetupChange = (checked: boolean) => {
        setUseAdvancedSetup(checked);
        if (!checked) {
            setUseLandmarks(false);
            setUseHirelings(false);
            setUsePartisansDeck(false);
        }
    };
    
    const wizardSteps = useMemo(() => {
        if (!useAdvancedSetup) {
            return ['players', 'map-modules', 'factions', 'faction-setup', 'finalize'];
        }
        
        const steps = ['players', 'map-modules'];
        if (map !== 'Fall') steps.push('map-setup');
        steps.push('draw-initial-cards');
        if (useLandmarks) steps.push('landmark-setup');
        if (useHirelings) steps.push('hireling-setup');
        steps.push('advanced-setup-draft-info');
        steps.push('factions', 'faction-setup', 'finalize');
        return steps;
    }, [map, useLandmarks, useHirelings, useAdvancedSetup]);
    
    const currentStep = wizardSteps[currentStepIndex];

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

    const handleNext = () => {
        if (currentStepIndex < wizardSteps.length - 1) {
            setCurrentStepIndex(i => i + 1);
        } else {
            finalizeSetup();
        }
    };
    
    const handleBack = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(i => i - 1);
        } else {
            navigate('/', { replace: true });
        }
    };
    
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
            useAdvancedSetup,
            useLandmarks,
            useHirelings,
            usePartisansDeck,
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

    const SetupInstructionCard: React.FC<{ blocks?: LibraryContentBlock[], text?: string | React.ReactNode }> = ({ blocks, text }) => (
        <Card padding="p-4" className="bg-[#F5EAC7] max-h-[26rem] overflow-y-auto pr-2">
            <div className="space-y-3 text-stone-800">
                {text && <p className="leading-relaxed">{text}</p>}
                {blocks?.map((block, index) => (
                    block.collapsible && (
                        <div key={index} className="space-y-2">
                            {block.collapsible.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="leading-relaxed">{detail}</p>
                            ))}
                        </div>
                    )
                ))}
            </div>
        </Card>
    );

    const renderStep = () => {
        const stepTitle = (num: number, text: string) => `Step ${num}: ${text}`;
        
        switch (currentStep) {
            case 'players':
                const numPlayerOptions = [2, 3, 4, 5, 6].map(n => ({ value: n, label: `${n}` }));
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{stepTitle(1, 'Players & Seating')}</h2>
                        <div className="space-y-4">
                            <CustomSelect
                                id="numPlayers"
                                label="Number of Players"
                                options={numPlayerOptions}
                                value={numPlayers}
                                onChange={(val) => handleNumPlayersChange(val as number)}
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
                           <StyledButton onClick={handleNext} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            case 'map-modules':
                 const mapOptions = [
                    { value: 'Fall', label: 'Fall Map (Default)' },
                    { value: 'Winter', label: 'Winter Map' },
                    { value: 'Lake', label: 'Lake Map' },
                    { value: 'Mountain', label: 'Mountain Map' },
                ];
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{stepTitle(wizardSteps.indexOf('map-modules') + 1, 'Map & Modules')}</h2>
                        <div className="space-y-6">
                            <CustomSelect
                                id="map"
                                label="Map"
                                options={mapOptions}
                                value={map}
                                onChange={(val) => setMap(val as any)}
                            />
                            <div>
                                <h3 className="text-lg font-title mb-2 text-stone-800">Setup & Game Options</h3>
                                <div className="space-y-3 bg-amber-100/60 p-4 rounded-lg">
                                    <CustomCheckbox
                                        id="use-advanced-setup"
                                        label="Use Advanced Setup"
                                        description="Draft factions and use optional modules."
                                        checked={useAdvancedSetup}
                                        onChange={handleAdvancedSetupChange}
                                    />
                                    <CustomCheckbox
                                        id="use-partisans-deck"
                                        label={exilesAndPartisansDeck.title}
                                        description={exilesAndPartisansDeck.description}
                                        checked={usePartisansDeck}
                                        onChange={setUsePartisansDeck}
                                        disabled={!useAdvancedSetup}
                                    />
                                    <CustomCheckbox
                                        id="use-landmarks"
                                        label="Use Landmarks"
                                        description="Add unique locations to the map."
                                        checked={useLandmarks}
                                        onChange={setUseLandmarks}
                                        disabled={!useAdvancedSetup}
                                    />
                                    <CustomCheckbox
                                        id="use-hirelings"
                                        label="Use Hirelings"
                                        description="Add mercenary factions to the game."
                                        checked={useHirelings}
                                        onChange={setUseHirelings}
                                        disabled={!useAdvancedSetup}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-8">
                           <StyledButton onClick={handleBack} variant="secondary" className="w-full">Back</StyledButton>
                           <StyledButton onClick={handleNext} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            case 'map-setup': {
                const mapTopic = variantMaps.topics?.find(t => t.id === 'map-variants');
                let mapSetupContent: LibraryContentBlock[] = [];
                let mapTitle = '';

                if (mapTopic) {
                    if (map === 'Winter') {
                        mapTitle = 'Winter Map';
                        mapSetupContent = mapTopic.content.filter(c => c.subtitle === mapTitle || c.collapsible?.summary === 'Show Winter Map Setup');
                    } else if (map === 'Lake') {
                        mapTitle = 'Lake Map';
                        mapSetupContent = mapTopic.content.filter(c => c.subtitle === mapTitle || c.collapsible?.summary === 'Show Lake Map Setup');
                    } else if (map === 'Mountain') {
                        mapTitle = 'Mountain Map';
                        mapSetupContent = mapTopic.content.filter(c => c.subtitle === mapTitle || c.collapsible?.summary === 'Show Mountain Map Setup');
                    }
                }

                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{stepTitle(wizardSteps.indexOf('map-setup') + 1, `${mapTitle} Setup`)}</h2>
                        <SetupInstructionCard blocks={mapSetupContent} />
                        <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">Back</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'draw-initial-cards': {
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{stepTitle(wizardSteps.indexOf('draw-initial-cards') + 1, 'Draw Initial Cards')}</h2>
                        <SetupInstructionCard text="Each player draws 5 cards. You will choose your final starting hand of 3 cards after all factions have been set up." />
                         <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">Back</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'landmark-setup': {
                const landmarkSetupContent = landmarks.topics?.find(t => t.id === 'landmarks-overview')?.content.filter(c => c.subtitle === 'Setup Procedure') || [];
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{stepTitle(wizardSteps.indexOf('landmark-setup') + 1, 'Landmark Setup')}</h2>
                        <SetupInstructionCard blocks={landmarkSetupContent} />
                         <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">Back</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'hireling-setup': {
                const hirelingSetupContent = hirelings.topics?.find(t => t.id === 'hirelings-setup')?.content || [];
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{stepTitle(wizardSteps.indexOf('hireling-setup') + 1, 'Hireling Setup')}</h2>
                        <SetupInstructionCard blocks={hirelingSetupContent} />
                        <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">Back</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'advanced-setup-draft-info': {
                const advancedSetupContent = advancedSetupRules.topics?.find(t => t.id === 'advanced-setup-procedure')?.content.filter(c => c.subtitle === '6. Draft Factions') || [];
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{stepTitle(wizardSteps.indexOf('advanced-setup-draft-info') + 1, 'Advanced Setup: Faction Draft')}</h2>
                        <SetupInstructionCard blocks={advancedSetupContent} />
                         <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">Back</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'factions': 
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-2 uppercase tracking-wider text-stone-900">{stepTitle(wizardSteps.indexOf('factions') + 1, 'Factions')}</h2>
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
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">Back</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full" disabled={players.some(p => !p.factionId)}>Next</StyledButton>
                        </div>
                    </div>
                );
            case 'faction-setup':
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{stepTitle(wizardSteps.indexOf('faction-setup') + 1, 'Faction Setup')}</h2>
                        <p className="text-stone-700 mb-4">Follow these instructions for each player in turn order.</p>
                        <div className="space-y-4 max-h-80 sm:max-h-96 overflow-y-auto pr-2">
                           {players.map((player, index) => (
                                <Card key={index} padding="p-4" className="bg-[#F5EAC7]">
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
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">Back</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">Next</StyledButton>
                        </div>
                    </div>
                );
            case 'finalize':
                return (
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{stepTitle(wizardSteps.indexOf('finalize') + 1, 'Finalize')}</h2>
                        <div className="space-y-3 text-stone-800">
                           {useAdvancedSetup ? (
                             <p>Each player now chooses 3 cards to keep from their hand of 5. The other 2 are shuffled back into the deck.</p>
                           ) : (
                             <p>Each player draws 3 cards.</p>
                           )}
                           <p>Place a ruin in each slot on the map marked with an 'R'.</p>
                           <p>The first player is <strong>{players[0]?.name || 'Player 1'}</strong>.</p>
                        </div>
                        <div className="flex gap-4 mt-8">
                           <StyledButton onClick={handleBack} variant="secondary" className="w-full">Back</StyledButton>
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
