
import React, { useState, useEffect } from 'react';
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

export const TurnDashboard: React.FC = () => {
    const navigate = useNavigate();
    const { gameState, nextPhase, endTurn, setPhase, setCurrentPlayer } = useGame();
    const [modalStack, setModalStack] = useState<{ type: string; data?: any }[]>([]);

    const openModal = (type: string, data?: any) => {
        // Push a dummy state into history so the back button is intercepted.
        window.history.pushState({ modal: true }, '');
        setModalStack(stack => [...stack, { type, data }]);
    };

    const closeModal = () => {
        // Programmatically go back, which triggers the 'popstate' event handler.
        if (modalStack.length > 0) {
            window.history.back();
        }
    };

    useEffect(() => {
        // This listener handles the 'popstate' event (triggered by back button or history.back()).
        const handlePopState = () => {
            // Sync the modal stack with the history change.
            setModalStack(stack => stack.slice(0, -1));
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []); // This effect runs once on mount to set up the listener.


    useEffect(() => {
        // This listener handles the Escape key to close modals.
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && modalStack.length > 0) {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [modalStack]); // Re-add listener if modalStack changes, to get the correct length.
    
    if (!gameState) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-xl">No active game.</p>
                <StyledButton onClick={() => navigate('/', { replace: true })} className="mt-4">Go to Main Menu</StyledButton>
            </div>
        );
    }

    const { players, currentPlayerIndex, currentPhase } = gameState;
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
            <div className="space-y-4">
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
                            <button onClick={() => openModal('actionDetail', action)} className="flex-grow text-left w-full p-3 rounded-lg transition-colors duration-200 bg-stone-100/50 hover:bg-stone-200/70 focus:outline-none">
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
        <div className="min-h-screen bg-stone-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-5xl mx-auto pb-24">
                {/* Header */}
                <header className="mb-6">
                    <p className="text-base sm:text-lg text-stone-600">Player's Turn:</p>
                    <h1 className="text-3xl sm:text-4xl font-title font-bold text-stone-900">{currentPlayer.name}</h1>
                    <p className="text-xl sm:text-2xl font-semibold text-orange-800">{currentFaction.name}</p>
                </header>

                {/* Player Switcher */}
                <Card className="mb-6" padding="p-3 sm:p-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h3 className="text-base sm:text-lg font-bold font-title text-stone-800 mr-2">Players:</h3>
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
                
                {/* Phase Indicator */}
                <div className="flex justify-start sm:justify-center border-b-2 border-stone-300 mb-6 overflow-x-auto hide-scrollbar">
                {Object.values(GamePhase).map(phase => (
                    <button key={phase} onClick={() => setPhase(phase)} className={`font-title text-lg sm:text-xl py-2 px-4 sm:px-6 whitespace-nowrap flex-shrink-0 transition-all duration-200 hover:bg-stone-200/50 rounded-t-lg ${currentPhase === phase ? 'border-b-4 border-orange-800 text-stone-900 font-bold' : 'border-b-4 border-transparent text-stone-500 hover:text-stone-700'}`}>
                        {phase}
                    </button>
                ))}
                </div>

                {/* Main Content Area */}
                <Card>
                    <h2 className="text-xl sm:text-2xl font-title mb-4">Actions for {currentPhase}</h2>
                    {phaseData.actions.length > 0 ? (
                        renderActions()
                    ) : <p className="text-stone-500 italic">No specific actions for this phase.</p>}
                </Card>

            </div>

            {/* Bottom Navigation */}
            <footer className="fixed bottom-0 left-0 right-0 bg-stone-800 text-white shadow-t-lg p-3">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div className="flex gap-2">
                        <StyledButton onClick={() => navigate('/library', { state: { fromGame: true } })} variant="icon" aria-label="Law Library">{ICONS.LAW}</StyledButton>
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
                                <div key={p.id} className="flex justify-between items-center p-2 bg-stone-100 rounded-md">
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
                
                if (!children) return null;

                return (
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