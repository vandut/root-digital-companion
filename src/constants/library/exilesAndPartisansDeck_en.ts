
import { LibraryCategory } from '../types';

export const exilesAndPartisansDeck: LibraryCategory = {
    id: 'exiles-partisans-deck',
    title: 'Exiles & Partisans Deck',
    description: 'An alternative deck for more dynamic and aggressive games.',
    type: 'rules',
    topics: [
        {
            id: 'exiles-deck-overview',
            title: 'Overview',
            content: [
                {
                    text: 'Players may agree to replace the standard 54-card deck with the Exiles and Partisans Deck. This alternative deck can be used with both standard and advanced setup, and features different card effects, many of which are more interactive, aggressive, and unpredictable. It is designed to encourage more dynamic games and is recommended for players familiar with the base game.'
                }
            ]
        },
        {
            id: 'key-differences',
            title: 'Key Differences from the Standard Deck',
            content: [
                {
                    subtitle: 'No Dominance Cards',
                    text: 'The most significant change is the removal of all four Dominance cards. With this deck, victory is only possible by reaching 30 victory points. This forces players into direct confrontation to score points and prevents a player from "turtling" in corner clearings to secure a win.'
                },
                {
                    subtitle: 'No Ambush Cards',
                    text: 'The five Ambush cards have been removed. This makes initiating battles less risky for the attacker, as they no longer have to fear taking two immediate, unblockable hits before the dice are rolled. This change generally encourages more frequent combat.'
                },
                 {
                    subtitle: 'New Card Distribution',
                    text: 'The number of cards for each suit (Fox, Rabbit, Mouse, Bird) is slightly different, and the distribution of crafted items has been changed, altering the crafting landscape of the woodland.'
                }
            ]
        },
        {
            id: 'new-card-effects',
            title: 'New Card Effects & Playstyle',
            content: [
                {
                    subtitle: 'A More Volatile Woodland',
                    text: 'The card effects in this deck are designed to be more impactful and interactive, often affecting other players directly. This leads to a more chaotic and reactive game where board positions can change suddenly.'
                },
                {
                    text: 'Many cards provide powerful tools for disrupting enemy plans or creating unexpected opportunities. Examples include:',
                    list: [
                        'Informants: Discard a matching card to remove an enemy warrior from that clearing.',
                        'False Orders: Spend a card to move warriors of another player, potentially disrupting their supply lines or pulling them out of a key defensive position.',
                        'Partisans: A crafted improvement that lets you deal an extra hit in clearings you rule.',
                        'Smugglers: A crafted improvement that lets you treat a clearing as matching any suit for moving your warriors.',
                    ]
                },
                 {
                    subtitle: 'Emphasis on Player Interaction',
                    text: 'The deck encourages players to pay close attention to each other\'s actions. Cards like "A Visit to Friends" (gain warriors by paying another player) or "Scouting Party" (force players with large hands to give you cards) create a web of temporary alliances, negotiations, and betrayals. The game becomes less about executing a solitary strategy and more about adapting to the ever-changing political landscape.'
                }
            ]
        }
    ]
};