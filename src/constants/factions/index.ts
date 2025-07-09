
import { Faction, FactionId } from '../types';

import { marquiseDeCat } from './marquiseDeCat';
import { eyrieDynasties } from './eyrieDynasties';
import { woodlandAlliance } from './woodlandAlliance';
import { vagabond } from './vagabond';
import { lizardCult } from './lizardCult';
import { riverfolkCompany } from './riverfolkCompany';
import { undergroundDuchy } from './undergroundDuchy';
import { corvidConspiracy } from './corvidConspiracy';
import { lordOfTheHundreds } from './lordOfTheHundreds';
import { keepersInIron } from './keepersInIron';

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