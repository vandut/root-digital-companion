
import { Faction, FactionId, OrderType } from '../types';

export const lordOfTheHundreds: Faction = {
  id: FactionId.LORD_OF_THE_HUNDREDS,
  name: 'Lord of the Hundreds',
  reach: 9,
  type: 'Militant',
  tagline: 'Warlord of the Wastes. Rule through fear and overwhelming force, scoring points by oppressing clearings.',
  howToWin: 'Score points in the Evening by Oppressing the woodland—ruling clearings that contain your pieces and no enemy pieces. The more such clearings you rule, the more points you score.',
  howToPlay: 'The Lord of the Hundreds is a hyper-aggressive warlord faction. You are led by a powerful Warlord piece who is central to your actions. Your abilities are fueled by your Hoard of items; the more items you have, the more actions you can take (Command) and the more powerful your Warlord becomes (Prowess). Each turn you select a new Mood, a temporary ability that shapes your strategy. You score points by aggressively clearing out enemies and establishing total dominance over clearings. You can also spend cards to Incite Mobs, which will Raze enemy buildings and tokens at the start of your next turn.',
  strategy: 'Aggression is your only path. Use your Warlord to lead the charge with the Advance action. Your early game should focus on looting items from ruins or other players to power up your Hoard, which directly increases your number of actions. Choose your Mood carefully to counter your opponents or press your advantage. The Incite action is powerful for softening up well-defended clearings before your main attack. Your goal is to create a large, contiguous territory free of enemies to maximize your Oppress scoring each evening.',
  specialAbilities: [
    { title: 'The Warlord', description: 'Your Warlord piece is a special warrior that cannot be removed outside of battle. Many of your actions are centered on the Warlord\'s location.' },
    { title: 'Contempt for Trade', description: 'When you craft an item, you may choose to take the item OR to discard the item permanently to score its listed victory points.' },
    { title: 'The Hoard', description: 'Items you gain are placed on your Hoard. The number of items determines your Command (number of basic actions) and Prowess (number of Warlord Advance actions).' },
    { title: 'Looters', description: 'When attacking, you can declare you are Looting. If you do, you deal no rolled hits, but if you rule the clearing after the battle, you steal one item from the defender\'s crafted items box.' },
  ],
  setup: [
    "Gather Pieces: Form supplies of 20 warriors, 1 warlord, and 6 strongholds.",
    "Garrison: Place your warlord, 4 warriors, and 1 stronghold in a corner clearing.",
    "Place Items: If not already done, place the four 'R' items under the ruins.",
    "Get Stubborn: Place your Stubborn mood card (ignore the first hit in your Warlord's clearing) on your Mood Card slot.",
  ],
  turn: {
    Birdsong: {
      actions: [
        {
          title: 'Raze',
          description: 'Mob tokens ravage clearings, removing enemy pieces and looting ruins.',
          order: OrderType.ORDERED,
          details: ['In every clearing with one of your mob tokens, remove all enemy buildings and tokens (scoring VP). Then, take one item from the ruin if present. After resolving all mobs, roll the mob die to place a new mob token adjacent to an existing one.']
        },
        {
          title: 'Recruit',
          description: 'Reinforce your Warlord and strongholds.',
          order: OrderType.ORDERED,
          details: ['Place warriors equal to your Prowess value in the Warlord\'s clearing. Then, place one warrior in each clearing that has one of your strongholds.']
        },
        {
          title: 'Anoint',
          description: 'If your Warlord is not on the map, a warrior is promoted to become the Warlord.',
          order: OrderType.ORDERED,
          details: ['If your Warlord was removed in a previous turn, you must choose one of your warriors on the map to be promoted to the new Warlord.']
        },
        {
          title: 'Choose Mood',
          description: 'Change your Warlord\'s mood, gaining a new ability for the turn.',
          order: OrderType.ORDERED,
          details: ['You must choose a new mood card from the available options. You cannot choose a mood that shows an item type you currently possess in your Hoard. The mood grants a powerful passive ability for the turn (e.g., Bitter, Jubilant, Wrathful).']
        },
      ]
    },
    Daylight: {
      actions: [
        {
          title: 'Craft',
          description: 'Activate your strongholds to craft cards.',
          order: OrderType.ORDERED,
          details: ['You may use your strongholds as crafting stations. The suit of the stronghold is the suit of the clearing it is in.']
        },
        {
          title: 'Command the Hundreds',
          description: 'Take actions up to your Command value.',
          order: OrderType.ORDERED,
          details: ['Your Command value (1-4, based on items in your Hoard) is the number of actions you can take from the following list. You can take them in any order and repeat them.']
        },
        {
          title: 'Move',
          description: 'Take a move action.',
          order: OrderType.UNORDERED,
          details: ['Perform a standard move. You must rule the origin or destination.']
        },
        {
          title: 'Battle',
          description: 'Initiate a battle.',
          order: OrderType.UNORDERED,
          details: ['Initiate a battle in a clearing where you have warriors.']
        },
        {
          title: 'Build',
          description: 'Spend a card to place a stronghold.',
          order: OrderType.UNORDERED,
          details: ['Spend a card to place one of your strongholds in a matching clearing that you rule.']
        },
        {
          title: 'Advance the Warlord',
          description: 'Move your Warlord with any number of warriors, then you may battle.',
          order: OrderType.ORDERED,
          details: [
              'You may take this action a number of times up to your Prowess value. Move your Warlord and any warriors in his clearing to an adjacent clearing. After the move, you may initiate a battle in the destination clearing.',
              'This powerful, combined move-battle action is fueled by your Prowess and is your primary tool for conquest.'
          ]
        }
      ]
    },
    Evening: {
      actions: [
        {
          title: 'Incite',
          description: 'Spend cards to place mob tokens.',
          order: OrderType.ORDERED,
          details: ['Any number of times, you may spend a card to place a mob token in a matching clearing that has one of your warriors but no mob token already. This sets up your Raze action for the next turn.']
        },
        {
          title: 'Oppress',
          description: 'Score points for each clearing you rule with no enemy pieces.',
          order: OrderType.ORDERED,
          details: ['This is your main scoring engine. Count the number of clearings you rule that contain at least one of your pieces and zero enemy pieces. Score VP based on the Oppress track on your board. The more you control, the more you score.']
        },
        {
          title: 'Draw and Discard',
          description: 'Draw one card, then discard to five.',
          order: OrderType.ORDERED,
          details: ['Draw one card from the deck. If you have more than five cards in your hand, discard down to five.']
        }
      ]
    }
  }
};