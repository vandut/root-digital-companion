
import { LibraryCategory } from '../types';

export const coreRules: LibraryCategory = {
    id: 'core-rules',
    title: 'Core Rules',
    description: 'The fundamental concepts and actions governing all players.',
    type: 'rules',
    topics: [
        {
            id: 'how-to-win',
            title: 'How to Win',
            content: [
                {
                    subtitle: 'How to Win',
                    text: 'The first player to reach 30 victory points immediately wins the game. If multiple players reach 30 or more victory points simultaneously, the player taking the current turn wins.'
                },
                {
                    subtitle: 'Scoring Victory Points',
                    text: 'Each faction has a unique way to score victory points, but any faction can score points in two common ways. Whenever you remove an enemy’s building or token, you score one victory point. Whenever you craft an item, you score the victory points listed on the card.'
                },
                {
                    subtitle: 'Dominance Cards',
                    text: 'The deck has four dominance cards, which let you win the game without scoring 30 victory points. This provides an alternative path to victory for players who can establish territorial control.',
                    collapsible: {
                        summary: 'Advanced: How to use Dominance Cards',
                        details: [
                            'Activation: During your Daylight, if you have at least 10 victory points, you may play a dominance card to change your victory condition. You must remove your score marker from the score track and can no longer score victory points in the traditional way.',
                            'Victory Condition (Suits): For Mouse, Rabbit, or Fox dominance, you win immediately at the start of your Birdsong if you RULE three clearings of the matching suit.',
                            'Victory Condition (Bird): For Bird dominance, you win immediately at the start of your Birdsong if you RULE two clearings in opposite corners of the map.',
                            'Spending: A dominance card can be spent for its suit just like any other card. If it would be discarded, instead place it near the map. During your Daylight, you can take an available dominance card into your hand by spending a card of the matching suit.'
                        ]
                    }
                }
            ]
        },
        {
            id: 'key-concepts',
            title: 'Key Concepts',
            content: [
                {
                    subtitle: 'Rule',
                    text: 'A player RULES a clearing if they have more total warriors and buildings in it than each other player. Tokens and pawns (like the Vagabond) do not contribute to rule. If there is a tie for the most pieces, no one rules the clearing.'
                },
                {
                    subtitle: 'Clearings, Paths, and Forests',
                    text: 'The map is composed of many CLEARINGS linked by PATHS. A clearing is adjacent to all other clearings linked to it by a path. Each clearing has a SUIT (mouse, rabbit, or fox) and a number of BUILDING SLOTS (white boxes). You cannot place a building in a clearing with no open slots. Areas on the map enclosed by paths and clearings are called FORESTS.'
                },
                {
                    subtitle: 'Ruins',
                    text: 'Slots marked with a small "R" begin the game filled with RUINS. Ruins cannot be removed unless explicitly instructed (such as by the Vagabond\'s Explore action). They block building slots until they are removed.'
                },
            ]
        },
        {
            id: 'the-cards',
            title: 'The Cards',
            content: [
                {
                    subtitle: 'Birds Are Wild',
                    text: 'You can treat any bird card as a card of another suit (mouse, fox, or rabbit).',
                    collapsible: {
                        summary: 'Advanced: Bird Card Nuances',
                        details: [
                            'Forced Effects: If you are prompted to discard or give cards of non-bird suits (e.g., via the Vagabond\'s Aid action), you MUST treat your bird cards as the prompted suit. You cannot withhold them.',
                            'Reverse Substitution: If you are prompted to spend, discard, take, or give a bird card specifically, you CANNOT substitute a card of another suit.'
                        ]
                    }
                },
                {
                    subtitle: 'Ambush Cards',
                    text: 'There are five AMBUSH CARDS in the deck (one mouse, fox, rabbit, and two birds). You may spend an ambush card for its suit, but it does not have a crafted effect. Its primary purpose is to be played in battle to deal two immediate hits to an attacker.'
                },
            ]
        },
        {
            id: 'key-actions',
            title: 'Key Actions',
            content: [
                {
                    subtitle: 'Craft',
                    text: 'You can CRAFT most cards from your hand to gain an immediate or persistent effect. To craft a card, you must ACTIVATE crafting pieces (e.g., Marquise workshops, Eyrie roosts) of the suits listed in the card\'s bottom-left corner. Each crafting piece may be activated only once per turn.',
                    collapsible: {
                        summary: 'Advanced: Crafting Details',
                        details: [
                            'Immediate Effects (Paper Box Icon): After crafting, resolve the card\'s effect and then discard it. If it shows an item, take the matching item from the supply and place it in your Crafted Items box (or faction equivalent). If the required item is not in the supply, you CANNOT craft the card.',
                            'Persistent Effects (Stone Box Icon): After crafting, place the card in your play area. Its effect is now ongoing. You CANNOT craft a persistent effect if you already have an identical one in your play area.'
                        ]
                    }
                },
                {
                    subtitle: 'Move',
                    text: 'When you MOVE, take any number (more than zero) of your warriors from one clearing and move them on a linking path to one adjacent clearing. To take a move action, you MUST RULE either the origin clearing OR the destination clearing (or both).'
                },
                {
                    subtitle: 'Battle',
                    text: 'When you BATTLE, choose a clearing containing your warriors. You are the ATTACKER. Choose an enemy in that clearing to be the DEFENDER.',
                    collapsible: {
                        summary: 'Advanced: The 4 Steps of Battle',
                        details: [
                            'Step 1: Defender May Ambush. The defender may play an ambush card matching the clearing. If they do, they deal 2 hits immediately. The attacker may cancel this by playing their own matching ambush card (both cards are then discarded with no effect).',
                            'Step 2: Roll Dice. Roll both dice. The attacker deals hits equal to the higher roll; the defender deals hits equal to the lower roll. Your maximum rolled hits is limited by your number of warriors in the clearing. The defender is considered Defenseless if they have no warriors, causing the attacker to deal one extra hit.',
                            'Step 3: Use Card Effects. The attacker, then the defender, may use optional effects from cards like "Brutal Tactics" or "Armorers" to add extra hits or modify the battle.',
                            'Step 4: Deal Hits. Each hit removes one piece from the other side. The side taking hits chooses the order, but ALL of their warriors in the clearing must be removed before any of their buildings or tokens can be removed. You score 1 VP for each enemy building or token you remove.'
                        ]
                    }
                },
            ]
        }
    ]
};