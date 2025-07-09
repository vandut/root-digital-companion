
import { LibraryCategory } from '../types';

export const advancedSetup: LibraryCategory = {
    id: 'advanced-setup',
    title: 'Advanced Setup',
    description: 'An alternative setup method for experienced players.',
    type: 'rules',
    topics: [
        {
            id: 'advanced-setup-procedure',
            title: 'Advanced Setup Procedure',
            content: [
                { 
                    text: 'For experienced players seeking more variety, the Advanced Setup (Appendix A) replaces the standard setup. It introduces a faction draft and optional modules to ensure games are balanced and interesting. The steps are as follows:'
                },
                {
                    subtitle: '1. Choose and Set Up Map',
                    text: 'Players collectively choose a map to play on (e.g., Fall, Winter, Lake, Mountain). If a variant map is chosen, follow its specific setup modifications first.'
                },
                {
                    subtitle: '2. Choose Deck',
                    text: 'Players decide as a group whether to use the standard deck or the Exiles & Partisans deck for the game.'
                },
                {
                    subtitle: '3. Set Up Optional Modules',
                    text: 'Players can agree to add Landmarks and/or Hirelings to the game. If so, follow their specific setup rules now. These modules add significant variety and new rules to the game.'
                },
                {
                    subtitle: '4. Seat Players',
                    text: 'Determine the seating order and which player will go first. This is typically done randomly.'
                },
                {
                    subtitle: '5. Draw Initial Cards',
                    text: 'Each player draws a hand of five cards. They will not keep all of these; they will choose their final starting hand after faction setup.'
                },
                {
                    subtitle: '6. Draft Factions',
                    text: 'This method uses faction setup cards to create a balanced draft pool. Starting with the last player in turn order and going counter-clockwise, each player chooses a faction from the pool and sets it up immediately before the next player chooses.',
                    collapsible: {
                        summary: 'Show Faction Draft Steps',
                        details: [
                            'The draft follows these specific steps:',
                            '1. Deal Setup Cards: Separate faction cards into "Militant" (red name, sword icon) and "Insurgent" (grey name, no sword). Shuffle the Militant cards and deal one to the center of the table. Shuffle the remaining Militants with all Insurgent cards. Finally, deal one card per player, plus one extra, into the shared draft pool.',
                            '2. Choose Factions: Starting with the last player and moving counter-clockwise, each player selects one card from the pool. They immediately perform the setup steps described on that card.',
                            'Special Rule (Lock Last Insurgent): If the final card dealt to the pool is an Insurgent, it is "locked." It cannot be chosen as long as there are any unlocked Militant factions available in the draft pool.',
                            'Special Rule (Two Players): If playing with two players, remove all Insurgent faction setup cards before dealing out any cards. This ensures a more direct conflict.',
                            'Special Rule (Vagabond): When a Vagabond setup card is dealt, also deal a random Vagabond character card beside it. The player who drafts the Vagabond must use that character.',
                            'Special Rule (Homelands): A player cannot set up in a homeland clearing another player has already chosen for their own setup.'
                        ]
                    }
                },
                {
                    subtitle: '7. Choose Starting Hand',
                    text: 'After all factions are set up, each player looks at the five cards they drew earlier and chooses three to keep. The other two cards are shuffled back into the deck.'
                }
            ]
        }
    ]
};