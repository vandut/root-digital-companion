
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { StyledButton } from '../components/StyledButton';
import { useGame } from '../hooks/useGame';
import { Player } from '../types';
import { Faction, FactionId, GamePhase, LibraryContentBlock, MapId, FactionType } from '../constants/types';
import { REACH_RECOMMENDATIONS } from '../constants/game';
import { CustomSelect, Option, OptionGroup } from '../components/CustomSelect';
import { CustomTextInput } from '../components/CustomTextInput';
import { IMAGES } from '../constants/images';
import { CustomCheckbox } from '../components/CustomCheckbox';
import { useTranslations } from '../hooks/useTranslations';
import { useFactions } from '../hooks/useFactions';
import { useLibraryData } from '../hooks/useLibraryData';

export const NewGameSetup: React.FC = () => {
    const navigate = useNavigate();
    const { startNewGame } = useGame();
    const UI_TEXT = useTranslations();
    const FACTIONS = useFactions();
    const { 
        landmarks, 
        hirelings, 
        variantMaps, 
        advancedSetupRules, 
        exilesAndPartisansDeck 
    } = useLibraryData();
    
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [numPlayers, setNumPlayers] = useState(2);
    const [players, setPlayers] = useState<Partial<Player>[]>(
        Array(2).fill({}).map((_, i) => ({ name: UI_TEXT.newGameSetup.player(i), factionId: undefined }))
    );
    const [map, setMap] = useState<MapId>(MapId.FALL);
    const [useLandmarks, setUseLandmarks] = useState(false);
    const [useHirelings, setUseHirelings] = useState(false);
    const [useAdvancedSetup, setUseAdvancedSetup] = useState(false);
    const [usePartisansDeck, setUsePartisansDeck] = useState(false);

    const handleAdvancedSetupChange = (checked: boolean) => {
        setUseAdvancedSetup(checked);
        if (!checked) {
            setUseLandmarks(false);
            setUseHirelings(false);
        }
    };
    
    const wizardSteps = useMemo(() => {
        const steps = ['players', 'map-modules'];

        if (map !== MapId.FALL) {
            steps.push('map-setup');
        }

        if (useAdvancedSetup) {
            steps.push('draw-initial-cards');
            if (useLandmarks) {
                steps.push('landmark-setup');
            }
            if (useHirelings) {
                steps.push('hireling-setup');
            }
            steps.push('advanced-setup-draft-info');
        }
        
        steps.push('factions', 'faction-setup', 'finalize');
        
        return steps;
    }, [map, useLandmarks, useHirelings, useAdvancedSetup]);
    
    const currentStep = wizardSteps[currentStepIndex];

    const handleNumPlayersChange = (count: number) => {
        setNumPlayers(count);
        const currentPlayers = [...players];
        const newPlayers = Array(count).fill({}).map((_, i) =>
            currentPlayers[i] || { name: UI_TEXT.newGameSetup.player(i), factionId: undefined }
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
    }, [players, FACTIONS]);

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
            name: p.name || UI_TEXT.newGameSetup.player(i),
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
                    <span className={faction.type === FactionType.MILITANT ? 'text-red-700' : 'text-green-700'}>
                        {faction.name}
                    </span>
                    <span className="text-stone-600">{UI_TEXT.newGameSetup.factionReach(faction.reach)}</span>
                </>
            )
        });

        const militants: Option[] = availableToThisPlayer
            .filter(f => f.type === FactionType.MILITANT)
            .map(mapFactionToOption);
            
        const insurgents: Option[] = availableToThisPlayer
            .filter(f => f.type === FactionType.INSURGENT)
            .map(mapFactionToOption);

        const options: (Option | OptionGroup)[] = [
            { value: '', label: UI_TEXT.common.selectFaction, disabled: true },
        ];

        if (militants.length > 0) {
            options.push({
                label: UI_TEXT.factionType[FactionType.MILITANT],
                options: militants,
            });
        }

        if (insurgents.length > 0) {
            options.push({
                label: UI_TEXT.factionType[FactionType.INSURGENT],
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
        const step = (num: number, text: string) => <h2 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900">{UI_TEXT.common.step(num, text)}</h2>;
        
        switch (currentStep) {
            case 'players':
                const numPlayerOptions = [2, 3, 4, 5, 6].map(n => ({ value: n, label: `${n}` }));
                return (
                    <div>
                        {step(1, UI_TEXT.newGameSetup.stepTitles.players)}
                        <div className="space-y-4">
                            <CustomSelect
                                id="numPlayers"
                                label={UI_TEXT.newGameSetup.numPlayers}
                                options={numPlayerOptions}
                                value={numPlayers}
                                onChange={(val) => handleNumPlayersChange(val as number)}
                            />
                            {players.map((_, index) => (
                                <CustomTextInput
                                    key={index}
                                    id={`player${index}`}
                                    label={UI_TEXT.newGameSetup.playerName(index + 1)}
                                    value={players[index]?.name || ''}
                                    onChange={value => handlePlayerNameChange(index, value)}
                                    placeholder={UI_TEXT.newGameSetup.playerPlaceholder(index + 1)}
                                />
                            ))}
                        </div>
                        <div className="flex gap-4 mt-8">
                           <StyledButton onClick={() => navigate('/', { replace: true })} variant="secondary" className="w-full">{UI_TEXT.common.cancel}</StyledButton>
                           <StyledButton onClick={handleNext} className="w-full">{UI_TEXT.common.next}</StyledButton>
                        </div>
                    </div>
                );
            case 'map-modules':
                 const mapOptions = [
                    { value: MapId.FALL, label: UI_TEXT.mapId[MapId.FALL] },
                    { value: MapId.WINTER, label: UI_TEXT.mapId[MapId.WINTER] },
                    { value: MapId.LAKE, label: UI_TEXT.mapId[MapId.LAKE] },
                    { value: MapId.MOUNTAIN, label: UI_TEXT.mapId[MapId.MOUNTAIN] },
                ];
                return (
                    <div>
                        {step(wizardSteps.indexOf('map-modules') + 1, UI_TEXT.newGameSetup.stepTitles.mapModules)}
                        <div className="space-y-6">
                            <CustomSelect
                                id="map"
                                label={UI_TEXT.newGameSetup.map}
                                options={mapOptions}
                                value={map}
                                onChange={(val) => setMap(val as MapId)}
                            />
                            <div>
                                <h3 className="text-lg font-title mb-2 text-stone-800">{UI_TEXT.newGameSetup.setupOptions}</h3>
                                <div className="space-y-3 bg-amber-100/60 p-4 rounded-lg">
                                    <CustomCheckbox
                                        id="use-partisans-deck"
                                        label={exilesAndPartisansDeck.title}
                                        description={exilesAndPartisansDeck.description}
                                        checked={usePartisansDeck}
                                        onChange={setUsePartisansDeck}
                                    />
                                    <CustomCheckbox
                                        id="use-advanced-setup"
                                        label={UI_TEXT.newGameSetup.useAdvancedSetup}
                                        description={UI_TEXT.newGameSetup.useAdvancedSetupDesc}
                                        checked={useAdvancedSetup}
                                        onChange={handleAdvancedSetupChange}
                                    />
                                    <CustomCheckbox
                                        id="use-landmarks"
                                        label={UI_TEXT.newGameSetup.useLandmarks}
                                        description={UI_TEXT.newGameSetup.useLandmarksDesc}
                                        checked={useLandmarks}
                                        onChange={setUseLandmarks}
                                        disabled={!useAdvancedSetup}
                                    />
                                    <CustomCheckbox
                                        id="use-hirelings"
                                        label={UI_TEXT.newGameSetup.useHirelings}
                                        description={UI_TEXT.newGameSetup.useHirelingsDesc}
                                        checked={useHirelings}
                                        onChange={setUseHirelings}
                                        disabled={!useAdvancedSetup}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-8">
                           <StyledButton onClick={handleBack} variant="secondary" className="w-full">{UI_TEXT.common.back}</StyledButton>
                           <StyledButton onClick={handleNext} className="w-full">{UI_TEXT.common.next}</StyledButton>
                        </div>
                    </div>
                );
            case 'map-setup': {
                const mapTopic = variantMaps.topics?.find(t => t.id === 'map-variants');
                const mapSetupContent = mapTopic?.content.filter(c => c.mapId === map) ?? [];
                const mapTitle = UI_TEXT.mapTitle[map];

                return (
                    <div>
                        {step(wizardSteps.indexOf('map-setup') + 1, UI_TEXT.newGameSetup.stepTitles.mapSetup(mapTitle))}
                        <SetupInstructionCard blocks={mapSetupContent} />
                        <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">{UI_TEXT.common.back}</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">{UI_TEXT.common.next}</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'draw-initial-cards': {
                return (
                    <div>
                        {step(wizardSteps.indexOf('draw-initial-cards') + 1, UI_TEXT.newGameSetup.stepTitles.drawInitialCards)}
                        <SetupInstructionCard text={UI_TEXT.newGameSetup.drawInitialCardsText} />
                         <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">{UI_TEXT.common.back}</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">{UI_TEXT.common.next}</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'landmark-setup': {
                const landmarkSetupContent = landmarks.topics?.find(t => t.id === 'landmarks-overview')?.content.filter(c => c.collapsible) || [];
                return (
                    <div>
                        {step(wizardSteps.indexOf('landmark-setup') + 1, UI_TEXT.newGameSetup.stepTitles.landmarkSetup)}
                        <SetupInstructionCard blocks={landmarkSetupContent} />
                         <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">{UI_TEXT.common.back}</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">{UI_TEXT.common.next}</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'hireling-setup': {
                const hirelingSetupContent = hirelings.topics?.find(t => t.id === 'hirelings-setup')?.content || [];
                return (
                    <div>
                        {step(wizardSteps.indexOf('hireling-setup') + 1, UI_TEXT.newGameSetup.stepTitles.hirelingSetup)}
                        <SetupInstructionCard blocks={hirelingSetupContent} />
                        <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">{UI_TEXT.common.back}</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">{UI_TEXT.common.next}</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'advanced-setup-draft-info': {
                const advancedSetupContent = advancedSetupRules.topics?.find(t => t.id === 'advanced-setup-procedure')?.content.filter(c => c.collapsible) || [];
                return (
                    <div>
                        {step(wizardSteps.indexOf('advanced-setup-draft-info') + 1, UI_TEXT.newGameSetup.stepTitles.advancedSetupDraft)}
                        <SetupInstructionCard blocks={advancedSetupContent} />
                         <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">{UI_TEXT.common.back}</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">{UI_TEXT.common.next}</StyledButton>
                        </div>
                    </div>
                );
            }
            case 'factions': 
                return (
                    <div>
                        {step(wizardSteps.indexOf('factions') + 1, UI_TEXT.newGameSetup.stepTitles.factions)}
                        <p className="mb-4 text-stone-700">
                            {UI_TEXT.newGameSetup.totalReach} <span className={`font-bold ${totalReach < recommendedReach ? 'text-red-600' : 'text-green-600'}`}>{totalReach}</span> / {UI_TEXT.newGameSetup.recommendedReach(recommendedReach)}
                        </p>
                        {players.map((player, index) => {
                            const factionOptions = getFactionOptionsForPlayer(index);
                            return (
                                <div key={index} className="mb-4">
                                     <CustomSelect
                                        id={`faction-select-${index}`}
                                        label={player.name || UI_TEXT.newGameSetup.player(index)}
                                        options={factionOptions}
                                        value={player.factionId || ''}
                                        onChange={val => handleFactionSelect(index, val as FactionId)}
                                    />
                                </div>
                            );
                        })}
                         <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">{UI_TEXT.common.back}</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full" disabled={players.some(p => !p.factionId)}>{UI_TEXT.common.next}</StyledButton>
                        </div>
                    </div>
                );
            case 'faction-setup':
                return (
                    <div>
                        {step(wizardSteps.indexOf('faction-setup') + 1, UI_TEXT.newGameSetup.stepTitles.factionSetup)}
                        <p className="text-stone-700 mb-4">{UI_TEXT.newGameSetup.factionSetupInstructions}</p>
                        <div className="space-y-4 max-h-80 sm:max-h-96 overflow-y-auto pr-2">
                           {players.map((player, index) => (
                                <Card key={index} padding="p-4" className="bg-[#F5EAC7]">
                                    <h3 className="font-bold text-lg text-stone-900">{UI_TEXT.newGameSetup.factionName(player, FACTIONS[player.factionId!])}</h3>
                                    <ol className="list-decimal list-inside mt-2 space-y-1 text-stone-800">
                                        {FACTIONS[player.factionId!].setup.map((stepText, i) => (
                                            <li key={i}>{stepText}</li>
                                        ))}
                                    </ol>
                                </Card>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-8">
                            <StyledButton onClick={handleBack} variant="secondary" className="w-full">{UI_TEXT.common.back}</StyledButton>
                            <StyledButton onClick={handleNext} className="w-full">{UI_TEXT.common.next}</StyledButton>
                        </div>
                    </div>
                );
            case 'finalize':
                return (
                    <div>
                        {step(wizardSteps.indexOf('finalize') + 1, UI_TEXT.newGameSetup.stepTitles.finalize)}
                        <div className="space-y-3 text-stone-800">
                           <p>{useAdvancedSetup ? UI_TEXT.newGameSetup.finalizeText.advanced : UI_TEXT.newGameSetup.finalizeText.standard}</p>
                           <p>{UI_TEXT.newGameSetup.finalizeText.ruins}</p>
                           <p>{UI_TEXT.newGameSetup.firstPlayer}<strong>{players[0]?.name || UI_TEXT.newGameSetup.player(0)}</strong>.</p>
                        </div>
                        <div className="flex gap-4 mt-8">
                           <StyledButton onClick={handleBack} variant="secondary" className="w-full">{UI_TEXT.common.back}</StyledButton>
                           <StyledButton onClick={finalizeSetup} className="w-full">{UI_TEXT.newGameSetup.startGame}</StyledButton>
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
