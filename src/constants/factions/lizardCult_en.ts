
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const lizardCult: Faction = {
  id: FactionId.LIZARD_CULT,
  name: 'Lizard Cult',
  reach: 2,
  type: FactionType.MILITANT,
  tagline: 'Fanatical Proselytizers. Convert the outcasts of the woodland and spread your gospel through overwhelming conviction.',
  howToWin: 'Score victory points primarily by performing the Score ritual in Daylight. The more Gardens of a certain suit you have, the more points you score when you spend a card of that suit.',
  mechanics: 'The Cult\'s actions are dictated by the discard pile, known as the Lost Souls. The most numerous suit in the Lost Souls at the start of your turn becomes the Outcast suit. This suit determines where you can perform powerful Conspiracy actions, which are fueled by Acolytes. You gain Acolytes primarily through your Revenge ability when your warriors are removed on defense. Your Daylight phase is spent performing Rituals by revealing cards from your hand. For each card revealed, you get one action (Build, Recruit, or Score). You only spend the card if you perform the Score ritual, making hand management crucial. Your buildings, Gardens, have a special property called Pilgrims, which makes you rule any clearing where you have a garden, a massive advantage for controlling the board.',
  howToPlay: 'The Lizard Cult is a faction that thrives on careful planning. You must pay close attention to what cards you are discarding to manipulate the Outcast suit to your advantage. You are weak in battle, so use your "Revenge" ability to your advantage—losing defenders gives you acolytes for powerful conspiracies. Your "Pilgrims" ability is one of the strongest in the game; a single garden lets you rule a clearing. Use this to block other factions from building and moving.',
  strategy: 'Your goal is to manipulate the "Outcast" suit to be a suit where you have established a presence and can build gardens, allowing you to score big. In the early game, carefully manage your hand to discard cards of the suit you need to become the Outcast. Your most powerful Conspiracy is Sanctify, which lets you replace an enemy building with a garden, a huge swing in board state and points. Your scoring is slow but can accelerate dramatically if you build many gardens of the same suit and can make that suit the Outcast.',
  specialAbilities: [
    { title: 'Hatred of Birds', description: 'Bird cards are not wild for your Rituals. The bird suit is its own separate thing, used for the Sacrifice ritual.' },
    { title: 'Revenge', description: 'When one of your warriors is removed while defending in battle, it is placed in the Acolytes box instead of your supply. This fuels your conspiracies.' },
    { title: 'Pilgrims', description: 'You rule any clearing where you have a garden, regardless of warriors or buildings. This overrides normal rule.' },
    { title: 'Fear of the Faithful', description: 'If one of your gardens is removed, you must discard a random card from your hand.' },
    { title: 'The Lost Souls Pile', description: 'Whenever you spend or discard a card, it goes to the Lost Souls pile instead of the main discard. This pile determines your Outcast suit.' },
  ],
  setup: [
    "Gather Warriors: Form a supply of 25 warriors.",
    "Place Warriors & Garden: Place 4 warriors and 1 garden in a corner clearing. Then place 1 warrior in each adjacent clearing.",
    "Choose Outcast: Place the Outcast marker on any suit space. This is your starting Outcast suit.",
    "Fill Garden Tracks: Place your 14 remaining gardens on your faction board.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Adjust Outcast',
          description: 'The suit with the most cards in the Lost Souls pile becomes the new Outcast.',
          order: OrderType.ORDERED,
          details: [
            'Count the cards of each suit in the Lost Souls pile (ignore birds). The suit that appears most often becomes the new Outcast. Move your Outcast marker to that suit.',
            'If the new Outcast suit is the same as the old one, flip the marker to its "Hated" side. Hated conspiracies cost one fewer acolyte. If there is a tie for the most cards, the marker does not move.'
          ]
        },
        {
          title: 'Discard Lost Souls',
          description: 'Discard all cards from the Lost Souls pile to the main discard pile.',
          order: OrderType.ORDERED,
          details: ['This clears the pile for the next round. This is also when Dominance cards become available for other players to take.']
        },
        {
          title: 'Perform Conspiracies',
          description: 'Spend acolytes to perform actions in Outcast clearings.',
          order: OrderType.ORDERED,
          details: [
              'You may spend acolytes (warriors from your Acolytes box) to perform powerful actions in clearings that match the current Outcast suit. You can perform these any number of times if you can pay the cost. If the suit is Hated, the cost is one less acolyte.',
              'Crusade (Cost: 2): Start a battle or move from an Outcast clearing.',
              'Convert (Cost: 2): Replace an enemy warrior with one of your own in an Outcast clearing.',
              'Sanctify (Cost: 3): Replace an enemy building with a garden in an Outcast clearing. This is your most powerful conspiracy.'
          ]
        },
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Perform Rituals',
          description: 'Reveal cards from your hand to take one action for each card revealed.',
          order: OrderType.ORDERED,
          details: [
            "Reveal any number of cards from your hand. For each card you reveal, you may perform one ritual (Build, Recruit, or Score). You do not spend the card unless you perform the Score ritual.",
            "Strategic Note: The more cards you reveal, the more actions you can take. A large hand size is crucial for a big Daylight phase."
          ]
        },
        {
          title: 'Build',
          description: 'For a revealed card, place a matching garden in a clearing you rule.',
          order: OrderType.UNORDERED,
          details: ['Reveal a card (e.g., a fox card). In a fox clearing that you rule, you may place a fox garden. This action does not spend the card. Remember, with Pilgrims, having a garden means you rule.']
        },
        {
          title: 'Recruit',
          description: 'For a revealed card, place a warrior in a matching clearing.',
          order: OrderType.UNORDERED,
          details: ['Reveal a card (e.g., a mouse card). In any mouse clearing, you may place one warrior from your supply. This action also does not spend the card.']
        },
        {
          title: 'Score',
          description: 'Spend a revealed card to score points for matching gardens.',
          order: OrderType.UNORDERED,
          details: ['Once per turn per suit, you can spend one of your revealed cards (placing it in the Lost Souls). You score victory points based on how many gardens of that suit you have on the map, as shown on your faction board. This is your main scoring engine.']
        },
        {
          title: 'Sacrifice',
          description: 'To use a bird card for a ritual, you must sacrifice a warrior.',
          order: OrderType.UNORDERED,
          details: ['Reveal a bird card. Take one of your warriors from anywhere on the map and place it in the Acolytes box. The bird card can then be used for a Build, Recruit, or Score action of any suit (mouse, fox, or rabbit). This is a great way to get extra acolytes while still performing a powerful action.']
        },
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Return Revealed Cards',
          description: 'Return all cards you revealed but did not spend to your hand.',
          order: OrderType.ORDERED,
          details: ['Take back any cards you revealed for rituals but did not spend for the Score action. Cards used for Score remain in the Lost Souls pile.']
        },
        {
          title: 'Craft',
          description: 'Activate gardens in Outcast clearings to craft.',
          order: OrderType.ORDERED,
          details: ['You may craft cards from your hand by activating gardens. Crucially, you can only use gardens that are in clearings matching the current Outcast suit.']
        },
        {
          title: 'Draw and Discard',
          description: 'Draw one card plus bonuses, then discard to five.',
          order: OrderType.ORDERED,
          details: ['Draw one card, plus one for each uncovered bonus on your Gardens track. Discard down to a hand size of five.']
        }
      ]
    }
  }
};
