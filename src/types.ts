
import { FactionId, GamePhase, MapId } from './constants/types';

export interface Player {
  id: string;
  name: string;
  factionId: FactionId;
  score: number;
}

export interface GameState {
  players: Player[];
  map: MapId;
  useAdvancedSetup: boolean;
  useLandmarks: boolean;
  useHirelings: boolean;
  usePartisansDeck: boolean;
  currentPlayerIndex: number;
  currentPhase: GamePhase;
}