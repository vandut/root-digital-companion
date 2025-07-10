
import { FactionId, GamePhase } from './constants/types';

export interface Player {
  id: string;
  name: string;
  factionId: FactionId;
  score: number;
}

export interface GameState {
  players: Player[];
  map: 'Fall' | 'Winter' | 'Lake' | 'Mountain';
  useAdvancedSetup: boolean;
  useLandmarks: boolean;
  useHirelings: boolean;
  usePartisansDeck: boolean;
  currentPlayerIndex: number;
  currentPhase: GamePhase;
}
