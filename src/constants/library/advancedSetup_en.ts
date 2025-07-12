
import { LibraryCategory } from '../types';

export const setup: LibraryCategory = {
    id: 'setup',
    title: 'Setup',
    description: 'Rules for starting a game, including the standard procedure and the advanced drafting method.',
    type: 'rules',
    topics: [
        {
            id: 'standard-setup',
            title: 'Standard Setup',
            content: [
                {
                    subtitle: '1. Choose Factions',
                    text: 'Each player chooses a faction. For a balanced game, the sum of the chosen factions\' Reach values (found on their faction board) should meet or exceed the recommendation for your player count:',
                    list: [
                        '2 Players: 17+ Reach',
                        '3 Players: 18+ Reach',
                        '4 Players: 21+ Reach',
                        '5 Players: 25+ Reach',
                        '6 Players: 28+ Reach'
                    ]
                },
                {
                    subtitle: '2. Perform Faction-Specific Setup',
                    text: 'In turn order (determined by your playgroup, or by the faction with the highest setup order value), each player follows the setup instructions on their faction board. This will guide you on placing starting warriors, buildings, and tokens.'
                },
                {
                    subtitle: '3. Place Ruins and Items',
                    text: 'Place one ruin token on each clearing with a printed \'R\' symbol. If using the corresponding expansion, place the item tokens under the ruins.'
                },
                {
                    subtitle: '4. Deal Starting Hands',
                    text: 'Each player draws three cards from the shared deck to form their starting hand.'
                },
                {
                    subtitle: '5. Determine First Player',
                    text: 'The player who placed their pieces first (or the player with the highest setup order value) takes the first turn.'
                }
            ]
        },
        {
            id: 'advanced-setup-procedure',
            title: 'Advanced Setup',
            content: [
                { 
                    text: 'For experienced players seeking more variety, this method replaces the standard faction selection. It introduces a faction draft and optional modules to ensure games are balanced and interesting. The steps are as follows:'
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