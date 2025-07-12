
import { LibraryCategory } from '../types';

export const landmarks: LibraryCategory = {
    id: 'landmarks',
    title: 'Landmarks',
    description: 'Unique locations that alter the rules of the clearings they occupy.',
    type: 'rules',
    topics: [
        {
            id: 'landmarks-overview',
            title: 'Using Landmarks',
            content: [
                {
                    text: 'Landmarks are an optional module, chosen during Advanced Setup, that add unique locations to the map. Each landmark introduces a special rule for its clearing, creating new strategic opportunities and challenges.'
                },
                {
                    subtitle: 'General Rules',
                    text: 'Landmarks are not owned by any faction and are not considered enemy pieces. They cannot be battled, moved, or removed unless a specific rule on the landmark\'s card explicitly allows it.'
                },
                {
                    subtitle: 'Setup Procedure',
                    text: 'Landmarks are added to the game during the Advanced Setup procedure.',
                    collapsible: {
                        summary: 'Show Landmark Setup Steps',
                        details: [
                            'Step 1: Choose. As a group, decide if you are playing with one or two landmarks. Remove any landmark card you do not want to use.',
                            'Step 2: Deal and Collect. Shuffle the chosen landmark cards, deal out the chosen number, and collect the landmark piece shown on each dealt card.',
                            'Step 3: Set Up. The last player in turn order sets up one drawn landmark as described on its card. If playing with two landmarks, the second-to-last player in turn order sets up the other drawn landmark.',
                            'Note on Map Conflicts: If using Variant Maps, the placement of landmarks may ignore or override the placement of the Tower (Mountain Map) and Ferry (Lake Map) pieces.'
                        ]
                    }
                }
            ]
        },
        {
            id: 'specific-landmarks',
            title: 'Specific Landmarks',
            content: [
                {
                    subtitle: 'The Lost City',
                    text: 'The clearing with this landmark has all four suits (mouse, fox, rabbit, and bird). When a player attacks in this clearing, they deal one extra hit.'
                },
                {
                    subtitle: 'The Legendary Forge',
                    text: 'The clearing with this landmark has all four suits (mouse, fox, rabbit, and bird). When a player crafts using this clearing, they may treat the card they are crafting as having any suit. When crafting an item using the Forge, they score one extra victory point.'
                },
                {
                    subtitle: 'The Tower',
                    text: 'The clearing with the Tower is known as The Pass. At the end of each player\'s Evening, if they rule The Pass, they score one victory point.'
                },
                {
                    subtitle: 'The Ferry',
                    text: 'The clearing with the Ferry is treated as adjacent to all other clearings with a river connection (Coastal Clearings). Once per turn, a player may move any number of their pieces from the Ferry\'s clearing to any other Coastal Clearing. The Ferry moves with the pieces. The moving player must rule the origin OR destination of this move. After the move, the player draws a card. The Ferry cannot be battled or removed.'
                }
            ]
        }
    ]
};