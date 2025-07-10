
import { Faction, FactionId, OrderType } from '../types';

export const undergroundDuchy: Faction = {
  id: FactionId.UNDERGROUND_DUCHY,
  name: 'Underground Duchy',
  reach: 8,
  type: 'Militant',
  tagline: 'Subterranean Sovereigns. Expand your burrow and sway ministers to your cause to demonstrate your right to rule.',
  howToWin: 'Score victory points by swaying Ministers to your parliament and by using their powerful, unique actions to score points.',
  mechanics: 'The Duchy has several interconnected mechanics. The Burrow is a special off-map clearing that can only be attacked if the opponent controls all three of your Tunnel tokens on the map. You recruit warriors directly into the Burrow. The Parliament is your main engine, consisting of nine Minister cards. To gain a minister, you must Sway them by revealing cards from your hand that match the suits of clearings where you have pieces. Each minister provides a powerful, free action during your Parliament phase. However, this power comes with the Price of Failure: if an enemy removes one of your buildings (Citadels or Markets), you must discard your highest-ranking swayed minister and permanently remove its crown from the game. Finally, Tunnels, placed with the Dig action, allow you to deploy warriors from the Burrow to anywhere on the map, giving you incredible mobility.',
  howToPlay: 'The Underground Duchy is a faction of nobles aiming to win popular support through political and military means. Your turn is split into two phases: Assembly, where you take two standard actions like Move, Battle, or Build, and Parliament, where you can sway a new minister and then use the actions of all your current ministers. You start with a strong board presence and can quickly expand across the map using your Dig action to create tunnels for surprise attacks. Your goal is to build a powerful parliament that provides you with a cascade of free actions each turn.',
  strategy: 'Your strategy should be a balance of military expansion and political influence. Use the Dig action to create tunnels, expanding your reach across the map. This makes it easier to meet the suit requirements to sway powerful ministers. Protect your buildings at all costs! A single lost building can cost you a top-tier minister and the crown needed to sway another. Focus on swaying ministers that complement your board state and strategy. For example, if you control many clearings of one suit, the Banker can be a massive source of points. A strong military presence is needed to protect your citadels and markets to avoid the devastating Price of Failure.',
  specialAbilities: [
    { title: 'The Burrow', description: 'You have a special off-map clearing, The Burrow, which only you can access. It is adjacent to all clearings with a Tunnel token.' },
    { title: 'Price of Failure', description: 'When any of your buildings are removed, you must return your highest-ranking swayed minister card to the unswayed pile and remove its crown from the game permanently.' },
    { title: 'Tunnels', description: 'Tunnel tokens connect the Burrow to the clearings on the map, allowing for surprise deployments.' },
  ],
  setup: [
    "Gather Warriors and Tunnels: Form supplies of 20 warriors and 3 tunnel tokens.",
    "Prepare the Burrow: Place the Burrow board near the map.",
    "Surface: Place 2 warriors and 1 tunnel in a corner clearing. Place 2 warriors in each adjacent clearing (but not in the Burrow).",
    "Fill Buildings Tracks: Place your 3 citadels and 3 markets on your faction board.",
    "Collect Ministers: Place your 9 minister cards face up in the Unswayed Ministers pile.",
    "Fill Crown Spaces: Place your 9 crowns (3 of each rank) on your faction board.",
  ],
  turn: {
    Birdsong: {
      actions: [
        {
          title: 'Reinforce the Burrow',
          description: 'Place warriors in the Burrow.',
          order: OrderType.ORDERED,
          details: ['Place one warrior in the Burrow, plus one additional warrior for each swayed minister that has a warrior icon. This is your main recruiting engine.']
        }
      ]
    },
    Daylight: {
      actions: [
        {
          title: 'Assembly',
          description: 'You may take up to two actions from the list below.',
          order: OrderType.ORDERED,
          details: ['Choose up to two actions from Build, Recruit, Move, Battle, or Dig. You can perform them in any order and can perform the same action twice.']
        },
        {
          title: 'Build',
          description: 'Reveal a card to place a citadel or market.',
          order: OrderType.UNORDERED,
          details: ["Reveal a card from your hand to place one of your buildings (citadel or market) in a matching clearing that you rule. Do not discard the card. Remember the Price of Failure if your buildings are removed."]
        },
        {
          title: 'Recruit',
          description: 'Place one warrior in the Burrow.',
          order: OrderType.UNORDERED,
          details: ["As an Assembly action, you can place one warrior from your supply into the Burrow. This gets them ready for deployment via tunnels."]
        },
         {
          title: 'Move',
          description: 'Take a move.',
          order: OrderType.UNORDERED,
          details: ["As an Assembly action, you can perform one move action. You must rule the origin or destination."]
        },
        {
          title: 'Battle',
          description: 'Initiate a battle.',
          order: OrderType.UNORDERED,
          details: ["As an Assembly action, you can initiate a battle in a clearing where you have warriors."]
        },
        {
          title: 'Dig',
          description: 'Spend a card to place a tunnel and move warriors from the Burrow.',
          order: OrderType.UNORDERED,
          details: ['Spend a card to place a tunnel in a matching clearing without one. You may then move up to four warriors from the Burrow into that clearing. This is your primary tool for expansion.']
        },
        {
          title: 'Parliament',
          description: 'Use your swayed ministers and attempt to sway a new one.',
          order: OrderType.ORDERED,
          details: ['After your two Assembly actions, you enter the Parliament step. Here you may first sway one new minister, and then you may take the action of each of your swayed ministers once.']
        },
        {
          title: 'Sway Minister',
          description: 'Reveal cards to sway a minister, scoring points.',
          order: OrderType.UNORDERED,
          details: ['Choose an unswayed minister. You must have a crown of the correct rank available. Reveal cards from your hand matching the suits pictured on the minister card. For each card revealed, you must have at least one piece in a clearing of that suit. Take the minister card, place a crown on it, and score the revealed VP from your board.']
        },
        {
          title: 'Use Minister Actions',
          description: 'You may take the action of each swayed minister once.',
          order: OrderType.UNORDERED,
          details: ['Each of your swayed ministers grants a unique, powerful action. These range from extra moves (Marshal) and battles (Captain) to revealing cards to build for free (Foremole) and scoring points for cards (Banker). Using these actions effectively is the key to victory.']
        },
      ]
    },
    Evening: {
      actions: [
        {
          title: 'Discard and Return',
          description: 'Discard revealed bird cards, and return other revealed cards to your hand.',
          order: OrderType.ORDERED,
          details: ['Any bird cards you revealed to Build or Sway are discarded to the Lost Souls pile. All other revealed cards (fox, mouse, rabbit) are returned to your hand.']
        },
        {
          title: 'Craft',
          description: 'Activate your Citadels and Markets to craft cards.',
          order: OrderType.ORDERED,
          details: ['You can use your buildings on the map as crafting stations. Both Citadels and Markets can be used for crafting.']
        },
        {
          title: 'Draw and Discard',
          description: 'Draw one card plus bonuses from ministers, then discard to five.',
          order: OrderType.ORDERED,
          details: ['Draw one card, plus one for each card icon showing on your swayed ministers. Discard down to a hand size of five.']
        }
      ]
    }
  }
};