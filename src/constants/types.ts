
export enum FactionId {
  MARQUISE_DE_CAT = 'marquise-de-cat',
  EYRIE_DYNASTIES = 'eyrie-dynasties',
  WOODLAND_ALLIANCE = 'woodland-alliance',
  VAGABOND = 'vagabond',
  LIZARD_CULT = 'lizard-cult',
  RIVERFOLK_COMPANY = 'riverfolk-company',
  UNDERGROUND_DUCHY = 'underground-duchy',
  CORVID_CONSPIRACY = 'corvid-conspiracy',
  LORD_OF_THE_HUNDREDS = 'lord-of-the-hundreds',
  KEEPERS_IN_IRON = 'keepers-in-iron',
}

export enum MapId {
  FALL = 'FALL',
  WINTER = 'WINTER',
  LAKE = 'LAKE',
  MOUNTAIN = 'MOUNTAIN',
}

export enum FactionType {
  MILITANT = 'MILITANT',
  INSURGENT = 'INSURGENT',
}

export enum GamePhase {
  BIRDSONG = 'BIRDSONG',
  DAYLIGHT = 'DAYLIGHT',
  EVENING = 'EVENING',
}

export enum OrderType {
    ORDERED = 'ordered',
    UNORDERED = 'unordered',
}

export interface FactionAction {
  title: string;
  description: string;
  details: string[];
  order: OrderType;
}

export interface FactionPhase {
  actions: FactionAction[];
}

export type FactionPhaseActions = {
  [key in GamePhase]: FactionPhase;
};

export interface Faction {
  id: FactionId;
  name: string;
  reach: number;
  type: FactionType;
  tagline: string;
  howToWin: string;
  mechanics: string;
  howToPlay: string;
  strategy: string;
  specialAbilities: { title: string; description: string }[];
  setup: string[];
  turn: FactionPhaseActions;
}

export interface LibraryContentBlock {
    subtitle?: string;
    text: string;
    list?: string[];
    collapsible?: {
        summary: string;
        details: string[];
    }
    mapId?: MapId;
}

export interface LibraryTopic {
    id: string;
    title: string;
    content: LibraryContentBlock[];
}

export type LibraryCategory = {
    id: string;
    title: string;
    description: string;
    type: 'rules' | 'factions';
    topics?: LibraryTopic[];
};
