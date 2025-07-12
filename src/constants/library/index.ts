
import { LibraryCategory } from '../types';
import { coreRules } from './coreRules_en';
import { factions } from './factions_en';
import { variantMaps } from './variantMaps_en';
import { hirelings } from './hirelings_en';
import { exilesAndPartisansDeck } from './exilesAndPartisansDeck_en';
import { landmarks } from './landmarks_en';
import { setup } from './advancedSetup_en';

export const LIBRARY_DATA: LibraryCategory[] = [
    coreRules,
    factions,
    setup,
    variantMaps,
    exilesAndPartisansDeck,
    hirelings,
    landmarks,
];