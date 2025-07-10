import { LibraryCategory } from '../types';
import { coreRules } from './coreRules';
import { factions } from './factions';
import { variantMaps } from './variantMaps';
import { hirelings } from './hirelings';
import { exilesAndPartisansDeck } from './exilesAndPartisansDeck';
import { landmarks } from './landmarks';
import { setup } from './advancedSetup';

export const LIBRARY_DATA: LibraryCategory[] = [
    coreRules,
    factions,
    setup,
    variantMaps,
    exilesAndPartisansDeck,
    hirelings,
    landmarks,
];