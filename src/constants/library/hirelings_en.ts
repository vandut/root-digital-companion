
import { LibraryCategory } from '../types';

export const hirelings: LibraryCategory = {
    id: 'hirelings',
    title: 'Hirelings',
    description: 'Use mercenary factions to supplement your forces.',
    type: 'rules',
    topics: [
        {
            id: 'hirelings-overview',
            title: 'Hirelings Overview',
            content: [
                {
                    text: 'Hirelings are minor factions that can be controlled by players during the game. They provide extra pieces on the board and unique abilities, adding another layer of strategy. Using hirelings is an optional module chosen during Advanced Setup.'
                },
            ]
        },
        {
            id: 'hirelings-setup',
            title: 'Hirelings Setup',
            content: [
                 {
                    text: 'To use Hirelings, they must be chosen during the Advanced Setup. The setup procedure is as follows.',
                    collapsible: {
                        summary: 'Show Hirelings Setup Steps',
                        details: [
                            'Step 1: Collect Pieces. Shuffle all the hirelings cards. Deal out three hireling cards and return the rest to the box. Collect the pieces for the dealt hireling cards into a supply.',
                            'Step 2: Demote. If playing with three players, flip over one random hireling to its Demoted side. If playing with four players, flip over two random hirelings to their Demoted side. If playing with five or more players, flip over all three hirelings to their Demoted side.',
                            'Step 3: Set Up Hirelings. Starting with the last player in turn order and going counterclockwise, players set up one dealt hireling each as described on its hireling card.',
                            'Step 4: Place Hireling Markers. Place the three hireling markers—marked “4,” “8,” and “12”—on the "4," "8,” and “12” spaces of the score track on the map.',
                            'Step 5: Return Corresponding Factions. A faction cannot be played if its corresponding hireling is in play. Return the corresponding faction boards, pieces, and setup cards to the box.'
                        ]
                    }
                }
            ]
        },
        {
            id: 'gaining-losing-hirelings',
            title: 'Gaining & Losing Hirelings',
            content: [
                {
                    subtitle: 'Gaining from Supply',
                    text: 'When a player\'s score marker enters a space on the score track with a hireling marker (spaces 4, 8, and 12), they take control of the corresponding hireling. They take the hireling card, place the marker below their Evening phase as a reminder, and roll the control die to determine how many control markers to place on the card.'
                },
                {
                    subtitle: 'Losing Control',
                    text: 'At the end of your turn, you must remove one control marker from each hireling card you gained on previous turns. If a hireling card has no control markers left, you must give it to another player (typically the player with the highest score). That player then immediately rolls for control.'
                }
            ]
        },
        {
            id: 'abilities-and-actions',
            title: 'Abilities and Actions',
            content: [
                {
                    subtitle: 'When-Hired Action',
                    text: 'An action the controlling player must take immediately when they gain control of the hireling.'
                },
                {
                    subtitle: 'Persistent Ability',
                    text: 'An ability that is always active or specifies when it happens.'
                },
                {
                    subtitle: 'Start-of-Birdsong Action',
                    text: 'An action the controller may or must take at the start of their Birdsong.'
                },
                {
                    subtitle: 'Once-Per-Daylight Action',
                    text: 'An action the controller may take once during their Daylight.'
                },
            ]
        },
        {
            id: 'general-rules',
            title: 'General Rules',
            content: [
                {
                    subtitle: 'Rule',
                    text: 'The controller treats hireling pieces as their own *only* for determining Rule. You can rule a clearing with only hireling pieces.'
                },
                {
                    subtitle: 'Enemy Status',
                    text: 'A hireling is an enemy to all players except its current controller (and their coalition partners).'
                },
                {
                    subtitle: 'Separate Pieces',
                    text: 'Hireling pieces are NOT faction pieces. They cannot be used for faction-specific abilities (e.g., Duchy Sway, Keepers Encamp).'
                },
                {
                    subtitle: 'Separate Actions',
                    text: 'Hireling actions (Move, Battle) can only use hireling pieces, not the controller\'s faction pieces.'
                },
                {
                    subtitle: 'Separate Effects',
                    text: 'Hirelings cannot use their controller\'s crafted persistent effects or ambush cards.'
                },
                {
                    subtitle: 'No Scoring from Removal',
                    text: 'The controller does NOT score VP when their hireling removes an enemy piece. However, the other player *does* score VP for removing the hireling\'s pieces.'
                },
                 {
                    subtitle: 'Weird Stuff',
                    text: 'Interactions like moving with the Ferry or triggering Alliance Outrage by moving hirelings still happen as if the controller were performing the action.'
                }
            ]
        }
    ]
};