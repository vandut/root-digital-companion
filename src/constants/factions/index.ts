
import { Faction, FactionId } from '../types';

import { marquiseDeCat } from './marquiseDeCat_en';
import { eyrieDynasties } from './eyrieDynasties_en';
import { woodlandAlliance } from './woodlandAlliance_en';
import { vagabond } from './vagabond_en';
import { lizardCult } from './lizardCult_en';
import { riverfolkCompany } from './riverfolkCompany_en';
import { undergroundDuchy } from './undergroundDuchy_en';
import { corvidConspiracy } from './corvidConspiracy_en';
import { lordOfTheHundreds } from './lordOfTheHundreds_en';
import { keepersInIron } from './keepersInIron_en';

export const FACTIONS: Record<FactionId, Faction> = {
  [FactionId.MARQUISE_DE_CAT]: marquiseDeCat,
  [FactionId.EYRIE_DYNASTIES]: eyrieDynasties,
  [FactionId.WOODLAND_ALLIANCE]: woodlandAlliance,
  [FactionId.VAGABOND]: vagabond,
  [FactionId.LIZARD_CULT]: lizardCult,
  [FactionId.RIVERFOLK_COMPANY]: riverfolkCompany,
  [FactionId.UNDERGROUND_DUCHY]: undergroundDuchy,
  [FactionId.CORVID_CONSPIRACY]: corvidConspiracy,
  [FactionId.LORD_OF_THE_HUNDREDS]: lordOfTheHundreds,
  [FactionId.KEEPERS_IN_IRON]: keepersInIron,
};