
import { LibraryCategory } from '../constants/types';
import { useSettings } from './useSettings';

import { coreRules as coreRules_en } from '../constants/library/coreRules_en';
import { factions as factions_en } from '../constants/library/factions_en';
import { variantMaps as variantMaps_en } from '../constants/library/variantMaps_en';
import { hirelings as hirelings_en } from '../constants/library/hirelings_en';
import { exilesAndPartisansDeck as exilesAndPartisansDeck_en } from '../constants/library/exilesAndPartisansDeck_en';
import { landmarks as landmarks_en } from '../constants/library/landmarks_en';
import { setup as advancedSetup_en } from '../constants/library/advancedSetup_en';

import { coreRules_pl } from '../constants/library/coreRules_pl';
import { factions_pl } from '../constants/library/factions_pl';
import { variantMaps_pl } from '../constants/library/variantMaps_pl';
import { hirelings_pl } from '../constants/library/hirelings_pl';
import { exilesAndPartisansDeck_pl } from '../constants/library/exilesAndPartisansDeck_pl';
import { landmarks_pl } from '../constants/library/landmarks_pl';
import { setup_pl } from '../constants/library/advancedSetup_pl';


const LIBRARY_DATA_EN: LibraryCategory[] = [
    coreRules_en,
    factions_en,
    advancedSetup_en,
    variantMaps_en,
    exilesAndPartisansDeck_en,
    hirelings_en,
    landmarks_en,
];

const LIBRARY_DATA_PL: LibraryCategory[] = [
    coreRules_pl,
    factions_pl,
    setup_pl,
    variantMaps_pl,
    exilesAndPartisansDeck_pl,
    hirelings_pl,
    landmarks_pl,
];

export const useLibraryData = () => {
    const { settings } = useSettings();

    if (settings.language === 'pl') {
        return {
            LIBRARY_DATA: LIBRARY_DATA_PL,
            landmarks: landmarks_pl,
            hirelings: hirelings_pl,
            variantMaps: variantMaps_pl,
            advancedSetupRules: setup_pl,
            exilesAndPartisansDeck: exilesAndPartisansDeck_pl,
        };
    }
    
    return {
        LIBRARY_DATA: LIBRARY_DATA_EN,
        landmarks: landmarks_en,
        hirelings: hirelings_en,
        variantMaps: variantMaps_en,
        advancedSetupRules: advancedSetup_en,
        exilesAndPartisansDeck: exilesAndPartisansDeck_en,
    };
};
