
import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { GameState } from '../types';
import { GamePhase } from '../constants/types';
import { saveGame, loadGame, hasSavedGame } from '../services/gameService';

interface GameContextType {
  gameState: GameState | null;
  setGameState: (state: GameState | null) => void;
  isGameSaved: boolean;
  startNewGame: (initialState: GameState) => void;
  continueGame: () => void;
  endGame: () => void;
  nextPhase: () => void;
  endTurn: () => void;
  setPhase: (phase: GamePhase) => void;
  setCurrentPlayer: (playerIndex: number) => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState | null>(() => loadGame());
  const [isGameSaved, setIsGameSaved] = useState<boolean>(() => hasSavedGame());

  useEffect(() => {
    saveGame(gameState);
    setIsGameSaved(gameState !== null);
  }, [gameState]);

  const startNewGame = useCallback((initialState: GameState) => {
    setGameState(initialState);
  }, []);

  const continueGame = useCallback(() => {
    const loadedGame = loadGame();
    if (loadedGame) {
      setGameState(loadedGame);
    }
  }, []);
  
  const endGame = useCallback(() => {
    setGameState(null);
  }, []);

  const nextPhase = useCallback(() => {
    setGameState(prevState => {
      if (!prevState) return null;
      const phaseOrder = [GamePhase.BIRDSONG, GamePhase.DAYLIGHT, GamePhase.EVENING];
      const currentPhaseIndex = phaseOrder.indexOf(prevState.currentPhase);
      if (currentPhaseIndex < 2) {
        return { ...prevState, currentPhase: phaseOrder[currentPhaseIndex + 1] };
      }
      return prevState; // Do nothing if it's already Evening
    });
  }, []);

  const setPhase = useCallback((phase: GamePhase) => {
    setGameState(prevState => {
      if (!prevState) return null;
      return { ...prevState, currentPhase: phase };
    });
  }, []);

  const endTurn = useCallback(() => {
    setGameState(prevState => {
      if (!prevState) return null;
      const nextPlayerIndex = (prevState.currentPlayerIndex + 1) % prevState.players.length;
      return {
        ...prevState,
        currentPlayerIndex: nextPlayerIndex,
        currentPhase: GamePhase.BIRDSONG,
      };
    });
  }, []);

  const setCurrentPlayer = useCallback((playerIndex: number) => {
    setGameState(prevState => {
      if (!prevState || playerIndex < 0 || playerIndex >= prevState.players.length) {
        return prevState;
      }
      return {
        ...prevState,
        currentPlayerIndex: playerIndex,
        currentPhase: GamePhase.BIRDSONG,
      };
    });
  }, []);

  const value = {
    gameState,
    setGameState,
    isGameSaved,
    startNewGame,
    continueGame,
    endGame,
    nextPhase,
    endTurn,
    setPhase,
    setCurrentPlayer,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};