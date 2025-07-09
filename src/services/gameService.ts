
import { GameState } from '../types';

const GAME_STORAGE_KEY = 'root-companion:v1:gameState';

export const saveGame = (gameState: GameState | null): void => {
  if (gameState === null) {
      localStorage.removeItem(GAME_STORAGE_KEY);
  } else {
      localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(gameState));
  }
};

export const loadGame = (): GameState | null => {
  const savedGame = localStorage.getItem(GAME_STORAGE_KEY);
  if (savedGame) {
    try {
      return JSON.parse(savedGame) as GameState;
    } catch (error) {
      console.error("Failed to parse saved game state:", error);
      localStorage.removeItem(GAME_STORAGE_KEY);
      return null;
    }
  }
  return null;
};

export const hasSavedGame = (): boolean => {
    return localStorage.getItem(GAME_STORAGE_KEY) !== null;
};