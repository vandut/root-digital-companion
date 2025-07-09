
import { LibraryCategory } from '../types';

export const variantMaps: LibraryCategory = {
    id: 'variant-maps',
    title: 'Variant Maps',
    description: 'Rules for the Winter, Lake, and Mountain maps.',
    type: 'rules',
    topics: [
        {
            id: 'map-variants',
            title: 'Map Variants',
            content: [
                {
                    subtitle: 'The Winter Map',
                    text: 'The Winter map features a different layout of clearings and paths. Its primary unique rule is the Raging River: the river divides forests, similar to how paths do. This creates more, smaller forest areas on the map, impacting adjacency for factions like the Duchy and Keepers.'
                },
                {
                    text: 'This process randomizes the board layout for every game, requiring players to adapt their strategies on the fly.',
                    collapsible: {
                        summary: 'Show Winter Map Setup',
                        details: [
                            "The Winter map's key feature is its randomized clearing suits, which are determined during setup. You do not use the printed suits on the board.",
                            "To set up the suits:",
                            "1. Collect the 12 suit markers (three of each suit: fox, mouse, and rabbit).",
                            "2. Flip all the markers face down and shuffle them thoroughly so no player knows which is which.",
                            "3. Place one shuffled, face-down marker on each of the 12 clearings on the map.",
                            "4. Once all markers are placed, flip them all face up. The suit shown on the marker is now the suit of that clearing for the entire game."
                        ]
                    }
                },
                {
                    subtitle: 'The Lake Map',
                    text: "The center of this map is a large Lake, which acts as a special river connecting all Coastal Clearings. Clearings touching the lake are Coastal Clearings, and forests touching the lake are Coastal Forests. The Lake is treated as rivers linking each coastal clearing to each other, and it also divides forests."
                },
                {
                    text: "The Ferry allows for powerful movement. Once per turn, a player with pieces in the Ferry's clearing can move them to any other coastal clearing. This move ignores normal adjacency, and the Ferry piece moves along with the pieces. After using the Ferry, the moving player draws one card. The Ferry cannot be battled or removed.",
                    collapsible: {
                        summary: 'Show Lake Map Setup',
                        details: [
                            "Setup Modifications: Place the Ferry piece in the corner clearing that is also a coastal clearing."
                        ]
                    }
                },
                {
                    subtitle: 'The Mountain Map',
                    text: "This map features impassable mountains, Closed Paths, and the Tower. Closed Paths block all movement and adjacency and cannot be used or have pieces placed on them."
                },
                {
                    text: "Once per turn during Daylight, a player with pieces in a clearing linked by a closed path can spend a card of any suit to permanently remove that path marker and score one victory point."
                },
                {
                    text: "The central clearing with the Tower piece is called The Pass. At the end of a player's Evening, if they rule The Pass, they score one victory point.",
                    collapsible: {
                        summary: 'Show Mountain Map Setup',
                        details: [
                            "Setup Modifications: Place the 6 Closed Path markers on the 6 paths of darker color. Place the Tower piece in the central clearing showing two towers."
                        ]
                    }
                }
            ]
        }
    ]
};