
import { Faction, FactionId, OrderType } from '../types';

export const keepersInIron: Faction = {
  id: FactionId.KEEPERS_IN_IRON,
  name: 'Keepers in Iron',
  reach: 8,
  type: 'Militant',
  tagline: 'Questing Knights. Recover the lost relics of the woodland to restore the honor of your ancient order.',
  howToWin: 'Score victory points by recovering Relics. You must find them in the forests, move them to a Waystation of the correct type, and then perform the Recover action. You score points based on the Relic\'s value and for completing sets of all three relic types.',
  mechanics: 'The Keepers are a questing faction focused on recovering ancient Relics hidden in the forests. Each of your warriors can carry one relic with them as they move. To score a relic, you must bring it to one of your Waystations, a special building that can be placed by using the Encamp action. Waystations come in three types (matching the three relic types) and can also be turned back into warriors with the Decamp action. Your turn structure is determined by your Retinue, a set of three columns where you place cards from your hand to program your actions for the next turn. Each column has a specific set of actions (e.g., Move, Battle, Delve, Recover), and the number of cards in a column dictates how many times you can perform those actions.',
  howToPlay: 'The Keepers in Iron are a slow, deliberate faction on a holy quest. Your entire game revolves around managing a flow of ancient Relics from the forests to your Waystations. It is a game of logistics and careful positioning. You must plan your Retinue carefully to create an efficient path for your relics, while also defending them from enemies. Your warriors are tough fighters, especially when a relic is present, thanks to your Devout Knights ability.',
  strategy: 'Efficiency is key. Use your Encamp action to place Waystations in safe, central locations that correspond to the relic types you are trying to recover. Remember that each warrior can carry a relic, so you can create caravans to move multiple relics at once. Your scoring is slow at first but accelerates as you recover more valuable relics and complete sets of all three types. Don\'t neglect crafting, as Waystations are also excellent crafting pieces. Your biggest challenge is your slow tempo, so you must be very efficient with your actions.',
  specialAbilities: [
    { title: 'Relics', description: 'You seek 12 relics hidden in the forests. Each has a hidden value of 1, 2, or 3. They must be physically moved across the map to be scored.' },
    { title: 'Waystations', description: 'Your unique buildings. You can Encamp (turn a warrior into a Waystation) or Decamp (turn a Waystation into a warrior). They are required to recover relics.' },
    { title: 'Devout Knights', description: 'In a battle where a relic is present, you ignore the first hit you take. Also, when moving, each of your warriors can carry one relic with them.' },
    { title: 'Prized Trophies', description: 'If an enemy removes one of your relics, they must place it in a forest, and you score an extra victory point.' },
  ],
  setup: [
    "Place Starting Relics: Shuffle the 12 relic tokens and place one randomly in each forest space.",
    "Gather Warriors: Form a supply of 15 warriors.",
    "Place Warriors: Place 4 warriors in a corner clearing, and 4 more in an adjacent map-edge clearing.",
    "Tuck Faithful Retainers: Tuck one Faithful Retainer card into each of the three Retinue column slots on your board.",
    "Collect Waystations: Place your three waystation buildings on your faction board.",
  ],
  turn: {
    Birdsong: {
      actions: [
        {
          title: 'Manage Presence',
          description: 'You may perform Encamp, Decamp, and Recruit in any order.',
          order: OrderType.ORDERED,
          details: [
              'During Birdsong, you can adjust your forces. You may Encamp or Decamp once per clearing. You can Recruit multiple times if you have the cards.'
          ]
        },
        {
          title: 'Encamp',
          description: 'Once per clearing, replace a warrior with a waystation.',
          order: OrderType.UNORDERED,
          details: ['Choose one of your warriors on the map. Replace it with a waystation from your board. You choose which side (relic type) is face up. This is how you set up your recovery points.']
        },
        {
          title: 'Decamp',
          description: 'Once per clearing, replace a waystation with a warrior.',
          order: OrderType.UNORDERED,
          details: ["In any clearing with one of your waystations, you may remove it and place one of your warriors there from your supply. This can be done once in each such clearing per turn."]
        },
        {
          title: 'Recruit',
          description: 'Spend a card to place two warriors at a matching waystation.',
          order: OrderType.UNORDERED,
          details: ['You may do this any number of times. Spend a card to place two warriors at a waystation in a clearing of a matching suit.']
        },
      ]
    },
    Daylight: {
      actions: [
        {
          title: 'Craft',
          description: 'Activate your waystations to craft cards.',
          order: OrderType.ORDERED,
          details: ['You may use any of your waystations as crafting pieces. The suit is determined by the clearing it is in.']
        },
        {
          title: 'Act with Retinue',
          description: 'For each card in your Retinue, perform that column\'s action.',
          order: OrderType.ORDERED,
          details: [
            'This is the core of your turn. Starting from the leftmost column of your Retinue, you must resolve actions for every card present. You can perform the actions for cards in a single column in any order.',
            'Column 1 (Move): For each card, take a move from a clearing matching the card\'s suit.',
            'Column 2 (Battle then Delve): For each card, battle in a matching clearing, then you may Delve (move a relic from an adjacent forest into that clearing, flipping it to reveal its value).',
            'Column 3 (Move or Recover): For each card, either move from a matching clearing, OR recover a relic there. To recover, you must have a Waystation matching the relic type. Move the relic to your board and score its VP value, plus 2 VP if you completed a set.'
          ]
        },
      ]
    },
    Evening: {
      actions: [
        {
          title: 'Live Off the Land',
          description: 'Remove one warrior from each clearing that has four or more of your warriors.',
          order: OrderType.ORDERED,
          details: ['This represents supply limits and forces you to manage your troop concentrations.']
        },
        {
          title: 'Gather Retinue',
          description: 'Add cards from your hand to your Retinue slots.',
          order: OrderType.ORDERED,
          details: ['You may add any number of cards from your hand to the slots in your Retinue, up to a maximum of 10 cards total. You can also shift one card between columns. This is how you plan your next turn.']
        },
        {
          title: 'Draw and Discard',
          description: 'Draw one card plus bonuses from waystations, then discard to five.',
          order: OrderType.ORDERED,
          details: ['Draw one card, plus one for each waystation you have on the map. Discard down to a hand size of five. More waystations means more cards to fuel your Retinue.']
        }
      ]
    }
  }
};