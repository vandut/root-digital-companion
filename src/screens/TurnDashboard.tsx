
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { Card } from '../components/Card';
import { Player } from '../types';
import { FactionAction, GamePhase, OrderType } from '../constants/types';
import { StyledButton } from '../components/StyledButton';
import { Modal } from '../components/Modal';
import { FactionDetail } from '../components/FactionDetail';
import { FACTIONS } from '../constants/factions';
import { ICONS } from '../constants/icons';
import { IMAGES } from '../constants/images';
import { LibraryContainer } from '../components/LibraryContainer';

export const TurnDashboard: React.FC = () => {
    const navigate = useNavigate();
    const { gameState, nextPhase, endTurn, setPhase, setCurrentPlayer } = useGame();
    const [modalStack, setModalStack] = useState<{ type: string; data?: any }[]>([]);

    const phaseContainerRef = useRef<HTMLDivElement>(null);
    const phaseTabRefs = useRef<Map<GamePhase, HTMLButtonElement | null>>(new Map());
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const openModal = (type: string, data?: any) => {
        window.history.pushState({ modal: true }, '');
        setModalStack(stack => [...stack, { type, data }]);
    };

    const closeModal = () => {
        if (modalStack.length > 0) {
            window.history.back();
        }
    };

    useEffect(() => {
        const handlePopState = () => {
            setModalStack(stack => stack.slice(0, -1));
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []); 


    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && modalStack.length > 0) {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [modalStack]); 

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!phaseContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - phaseContainerRef.current.offsetLeft);
        setScrollLeft(phaseContainerRef.current.scrollLeft);
        phaseContainerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        if (!phaseContainerRef.current) return;
        setIsDragging(false);
        phaseContainerRef.current.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
        if (!phaseContainerRef.current) return;
        setIsDragging(false);
        phaseContainerRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !phaseContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - phaseContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        phaseContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    if (!gameState) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-xl">No active game.</p>
                <StyledButton onClick={() => navigate('/', { replace: true })} className="mt-4">Go to Main Menu</StyledButton>
            </div>
        );
    }

    const { players, currentPlayerIndex, currentPhase } = gameState;

    useEffect(() => {
        const activeTab = phaseTabRefs.current.get(currentPhase);
        if (activeTab && phaseContainerRef.current) {
            const container = phaseContainerRef.current;
            const scrollLeft = activeTab.offsetLeft - (container.offsetWidth / 2) + (activeTab.offsetWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }, [currentPhase]);

    const currentPlayer = players[currentPlayerIndex];
    const currentFaction = FACTIONS[currentPlayer.factionId];
    const phaseData = currentFaction.turn[currentPhase];

    const handleExitGame = () => {
        navigate('/', { replace: true });
    };
    
    const handlePhaseAction = () => {
        if (currentPhase === GamePhase.EVENING) {
            endTurn();
        } else {
            nextPhase();
        }
    };
    
    const renderActions = () => {
        let orderedActionCounter = 1;

        return (
            <div className="space-y-2 sm:space-y-4">
                {phaseData.actions.map((action) => {
                    const number = action.order === OrderType.ORDERED ? orderedActionCounter++ : null;
                    
                    const listMarker = action.order === OrderType.ORDERED ? (
                        <span className="font-title font-bold text-3xl text-orange-800 leading-tight">
                            {number}.
                        </span>
                    ) : (
                        <span className="h-9 flex items-center">
                            {ICONS.BULLET}
                        </span>
                    );
                    
                    return (
                        <div key={action.title} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-8 flex justify-center">
                                {listMarker}
                            </div>
                            <button onClick={() => openModal('actionDetail', action)} className="flex-grow text-left w-full p-3 rounded-lg transition-colors duration-200 bg-[#EAE1D2] focus:outline-none">
                                <p className="font-bold text-stone-900 text-base sm:text-lg">{action.title}</p>
                                <p className="text-sm text-stone-600">{action.description}</p>
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    };


    return (
        <div className="h-screen flex flex-col bg-cover bg-center bg-fixed" style={{backgroundImage: `url('${IMAGES.BACKDROP_MAIN_MENU}')`}}>
            <header className="bg-stone-900 text-white p-3 border-b-4 border-orange-900 shadow-lg z-20 flex-shrink-0">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div className="flex items-end gap-4">
                        <div className="text-left">
                            <p className="text-sm text-stone-400">Player's Turn:</p>
                            <h1 className="text-xl sm:text-2xl font-title font-bold text-white leading-tight">{currentPlayer.name}</h1>
                        </div>
                        <p className="text-xl sm:text-2xl text-orange-400 leading-tight font-title font-bold">{currentFaction.name}</p>
                    </div>
                </div>
            </header>
            
            <main className="flex-1 max-w-5xl mx-auto w-full overflow-hidden sm:p-6 lg:p-8 flex flex-col">
                <LibraryContainer>
                    
                    {/* Player Switcher */}
                    <div className="flex-shrink-0">
                        <Card className="mb-6" padding="p-3 sm:p-4">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                {players.map((p, index) => (
                                    <StyledButton
                                        key={p.id}
                                        onClick={() => setCurrentPlayer(index)}
                                        disabled={index === currentPlayerIndex}
                                        variant={index === currentPlayerIndex ? 'primary' : 'secondary'}
                                        className="!py-1 !px-3"
                                    >
                                        {p.name}
                                    </StyledButton>
                                ))}
                            </div>
                        </Card>
                    </div>
                    
                    {/* Phase Indicator */}
                    <div 
                        ref={phaseContainerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className="flex-shrink-0 flex justify-start sm:justify-center border-b-2 border-stone-500 mb-6 overflow-x-auto hide-scrollbar cursor-grab select-none">
                    {Object.values(GamePhase).map(phase => (
                        <button 
                            key={phase} 
                            ref={el => { phaseTabRefs.current.set(phase, el); }}
                            onClick={() => setPhase(phase)} 
                            className={`font-title text-lg sm:text-xl py-2 px-4 sm:px-6 whitespace-nowrap flex-shrink-0 transition-all duration-200 rounded-t-lg ${currentPhase === phase ? 'border-b-4 border-orange-800 text-stone-900 font-bold' : 'border-b-4 border-transparent text-stone-600'}`}>
                            {phase}
                        </button>
                    ))}
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-grow">
                        <Card>
                            <h2 className="text-xl sm:text-2xl font-title mb-4">Actions for {currentPhase}</h2>
                            {phaseData.actions.length > 0 ? (
                                renderActions()
                            ) : <p className="text-stone-500 italic">No specific actions for this phase.</p>}
                        </Card>
                    </div>

                </LibraryContainer>
            </main>

            {/* Bottom Navigation */}
            <footer className="bg-stone-900 text-white p-3 border-t-4 border-orange-900 shadow-lg z-10 flex-shrink-0">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div className="flex gap-2">
                        <StyledButton onClick={() => navigate('/library', { state: { fromGame: true } })} variant="icon" aria-label="Library">{ICONS.LAW}</StyledButton>
                        <StyledButton onClick={() => openModal('players')} variant="icon" aria-label="Players">{ICONS.PLAYERS}</StyledButton>
                        <StyledButton onClick={handleExitGame} variant="icon" aria-label="Exit Game">{ICONS.EXIT}</StyledButton>
                    </div>
                    <StyledButton onClick={handlePhaseAction}>
                        {currentPhase === GamePhase.EVENING ? "End Turn" : "Next Phase"}
                    </StyledButton>
                </div>
            </footer>
            
            {/* Modals */}
            {modalStack.map((modal, index) => {
                let title = '';
                let children: React.ReactNode = null;

                if (modal.type === 'players') {
                    title = 'Players';
                    children = (
                        <div className="space-y-2">
                            {players.map((p) => (
                                <div key={p.id} className="flex justify-between items-center p-2 bg-[#EAE1D2] rounded-md">
                                    <div className="flex items-baseline">
                                        <span className={`font-bold ${p.id === currentPlayer.id ? 'text-orange-800' : ''}`}>{p.name}</span>
                                        <span className="text-sm text-stone-600 ml-2">- {FACTIONS[p.factionId].name}</span>
                                    </div>
                                    <StyledButton onClick={() => openModal('factionDetail', p)} variant="secondary" className="!py-1 !px-2">Rules</StyledButton>
                                </div>
                            ))}
                        </div>
                    );
                } else if (modal.type === 'factionDetail') {
                    const player = modal.data as Player;
                    title = `${player.name}'s Faction`;
                    children = <FactionDetail faction={FACTIONS[player.factionId]} />;
                } else if (modal.type === 'actionDetail') {
                    const action = modal.data as FactionAction;
                    title = action.title;
                    children = (
                        <div className="space-y-4">
                            {action.details.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    );
                }
                
                return children && (
                    <Modal
                        key={index} 
                        isOpen={true}
                        onClose={closeModal}
                        title={title}
                        hasBackdrop={index === 0}
                        type={modal.type}
                    >
                        {children}
                    </Modal>
                );
            })}
        </div>
    );
};
