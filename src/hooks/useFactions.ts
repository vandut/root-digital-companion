
import { Faction, FactionId } from '../constants/types';
import { useSettings } from './useSettings';

import { marquiseDeCat as marquiseDeCat_en } from '../constants/factions/marquiseDeCat_en';
import { eyrieDynasties as eyrieDynasties_en } from '../constants/factions/eyrieDynasties_en';
import { woodlandAlliance as woodlandAlliance_en } from '../constants/factions/woodlandAlliance_en';
import { vagabond as vagabond_en } from '../constants/factions/vagabond_en';
import { lizardCult as lizardCult_en } from '../constants/factions/lizardCult_en';
import { riverfolkCompany as riverfolkCompany_en } from '../constants/factions/riverfolkCompany_en';
import { undergroundDuchy as undergroundDuchy_en } from '../constants/factions/undergroundDuchy_en';
import { corvidConspiracy as corvidConspiracy_en } from '../constants/factions/corvidConspiracy_en';
import { lordOfTheHundreds as lordOfTheHundreds_en } from '../constants/factions/lordOfTheHundreds_en';
import { keepersInIron as keepersInIron_en } from '../constants/factions/keepersInIron_en';

import { marquiseDeCat_pl } from '../constants/factions/marquiseDeCat_pl';
import { eyrieDynasties_pl } from '../constants/factions/eyrieDynasties_pl';
import { woodlandAlliance_pl } from '../constants/factions/woodlandAlliance_pl';
import { vagabond_pl } from '../constants/factions/vagabond_pl';
import { lizardCult_pl } from '../constants/factions/lizardCult_pl';
import { riverfolkCompany_pl } from '../constants/factions/riverfolkCompany_pl';
import { undergroundDuchy_pl } from '../constants/factions/undergroundDuchy_pl';
import { corvidConspiracy_pl } from '../constants/factions/corvidConspiracy_pl';
import { lordOfTheHundreds_pl } from '../constants/factions/lordOfTheHundreds_pl';
import { keepersInIron_pl } from '../constants/factions/keepersInIron_pl';

const FACTIONS_EN: Record<FactionId, Faction> = {
    [FactionId.MARQUISE_DE_CAT]: marquiseDeCat_en,
    [FactionId.EYRIE_DYNASTIES]: eyrieDynasties_en,
    [FactionId.WOODLAND_ALLIANCE]: woodlandAlliance_en,
    [FactionId.VAGABOND]: vagabond_en,
    [FactionId.LIZARD_CULT]: lizardCult_en,
    [FactionId.RIVERFOLK_COMPANY]: riverfolkCompany_en,
    [FactionId.UNDERGROUND_DUCHY]: undergroundDuchy_en,
    [FactionId.CORVID_CONSPIRACY]: corvidConspiracy_en,
    [FactionId.LORD_OF_THE_HUNDREDS]: lordOfTheHundreds_en,
    [FactionId.KEEPERS_IN_IRON]: keepersInIron_en,
};

const FACTIONS_PL: Record<FactionId, Faction> = {
    [FactionId.MARQUISE_DE_CAT]: marquiseDeCat_pl,
    [FactionId.EYRIE_DYNASTIES]: eyrieDynasties_pl,
    [FactionId.WOODLAND_ALLIANCE]: woodlandAlliance_pl,
    [FactionId.VAGABOND]: vagabond_pl,
    [FactionId.LIZARD_CULT]: lizardCult_pl,
    [FactionId.RIVERFOLK_COMPANY]: riverfolkCompany_pl,
    [FactionId.UNDERGROUND_DUCHY]: undergroundDuchy_pl,
    [FactionId.CORVID_CONSPIRACY]: corvidConspiracy_pl,
    [FactionId.LORD_OF_THE_HUNDREDS]: lordOfTheHundreds_pl,
    [FactionId.KEEPERS_IN_IRON]: keepersInIron_pl,
};


export const useFactions = () => {
    const { settings } = useSettings();
    if (settings.language === 'pl') {
        return FACTIONS_PL;
    }
    return FACTIONS_EN;
};
