
import { Faction, FactionId, OrderType } from '../types';

export const corvidConspiracy: Faction = {
  id: FactionId.CORVID_CONSPIRACY,
  name: 'Corvid Conspiracy',
  reach: 3,
  type: 'Insurgent',
  tagline: 'Secretive Schemers. Manipulate the woodland from the shadows by setting and revealing your criminal plots.',
  howToWin: 'Score victory points by flipping your plot tokens. The more plots you already have face-up, the more points you score for flipping the next one.',
  howToPlay: 'The Corvid Conspiracy is a faction of spies and saboteurs focused on bluffing and misdirection. Your core gameplay loop involves placing face-down Plot tokens on the map, then flipping them with a warrior present to score points and trigger an effect. The scoring is exponential; the more plots already face-up, the more points the next one scores. Your opponents can try to foil your plans with "Exposure"—if an enemy in a clearing with your face-down plot shows you a matching card, they can guess the plot type. If they\'re right, they score a point and remove your plot. If they\'re wrong, you take their card! You have four plot types: Bombs that wipe out enemies, Snares that trap them, Raids that let you pop up elsewhere, and Extortion that steals cards.',
  strategy: 'Your entire game is about mind games. Place plots in locations that are most threatening to your opponents. A Bomb plot in their most valuable clearing forces them to either risk an Exposure or move out. A Snare can lock down a key path. Since you score for *each* face-up plot when you flip a new one, your scoring can explode in the late game. Use your Nimble ability to move warriors into position to flip plots. Your "Embedded Agents" ability makes enemies think twice about attacking you, as they\'ll take an extra hit if you have a face-down plot in the clearing.',
  specialAbilities: [
    { title: 'Nimble', description: 'You can move regardless of who rules your origin or destination clearing.' },
    { title: 'Embedded Agents', description: 'As a defender in a battle, if you have a face-down plot token in the clearing of battle, you deal an extra hit.' },
    { title: 'Exposure', description: 'An enemy player with pieces in a clearing with your face-down plot may show you a matching card to guess the plot type. If correct, they remove the plot and score 1 VP. If incorrect, you take their card.' },
    { title: 'Plot Tokens', description: 'You have four types of plots: Bomb (removes all enemy pieces), Snare (prevents enemy movement), Extortion (steals cards from enemies), and Raid (spawns warriors on removal).' },
  ],
  setup: [
    "Gather Warriors and Plots: Form supplies of 15 warriors and 8 plot tokens (2 of each type), face down.",
    "Scatter: Place 1 warrior in any one clearing of each suit (3 warriors total).",
  ],
  turn: {
    Birdsong: {
      actions: [
          {
              title: 'Perform Morning Conspiracies',
              description: 'You may perform these actions in any order and number (except Recruit).',
              order: OrderType.ORDERED,
              details: [
                  'You may perform Craft and Flip Plots any number of times. You can only Recruit once per turn. These actions can be done in any order.'
              ]
          },
          {
              title: 'Craft',
              description: 'Activate plot tokens to craft cards.',
              order: OrderType.UNORDERED,
              details: ["You may use your plot tokens on the map (both face-up and face-down) as crafting pieces. Each plot provides the suit of its clearing and can be activated once per turn."]
          },
          {
              title: 'Flip Plots',
              description: 'In a clearing with your warriors, flip a plot face up to score points and resolve its effect.',
              order: OrderType.UNORDERED,
              details: ['Choose a face-down plot in a clearing where you have at least one warrior. Flip it face up. Score 1 VP for EACH face-up plot you now have on the map (including the one just flipped). Then, resolve the plot\'s flip effect if it is a Bomb or Extortion.',
                        'Strategic Note: This is your primary scoring mechanism. The exponential nature means flipping your third and fourth plots are huge point swings.']
          },
          {
              title: 'Recruit',
              description: 'Once per turn, you may spend any card to place a warrior.',
              order: OrderType.UNORDERED,
              details: ['Spend a card to place one warrior in every clearing that matches the card\'s suit. A bird card lets you choose one suit to recruit in.']
          },
      ]
    },
    Daylight: {
      actions: [
        {
          title: 'Take Daylight Actions',
          description: 'You may take up to three actions from the list below.',
          order: OrderType.ORDERED,
          details: ['You have a budget of three actions. You may choose from Move, Plot, Battle, or Trick, in any order, and you may perform the same action multiple times.']
        },
        {
          title: 'Move',
          description: 'Take a move.',
          order: OrderType.UNORDERED,
          details: ["Take one move action. Remember your Nimble ability allows you to move regardless of who rules the clearings."]
        },
        {
          title: 'Battle',
          description: 'Initiate a battle.',
          order: OrderType.UNORDERED,
          details: ["Initiate a battle in a clearing where you have warriors. Remember your Embedded Agents ability if you have a face-down plot there."]
        },
        {
          title: 'Plot',
          description: 'Remove a warrior from a clearing to place a face-down plot there.',
          order: OrderType.UNORDERED,
          details: ['Choose a clearing that has no plot token. Remove one of your warriors from that clearing and place a plot token from your supply there, face down. This is how you set your traps.']
        },
        {
          title: 'Trick',
          description: 'Swap the locations of any two of your plot tokens on the map.',
          order: OrderType.UNORDERED,
          details: ['This action allows for immense bluffing potential. Swap a known plot with an unknown one, or move a threat across the map instantly. The plots can be face-up or face-down.']
        },
      ]
    },
    Evening: {
      actions: [
        {
          title: 'Exert',
          description: 'You may choose not to draw cards to take one extra Daylight action.',
          order: OrderType.ORDERED,
          details: ['A flexible option. If you are one action away from a game-winning move, you can sacrifice your card draw to make it happen.']
        },
        {
          title: 'Draw Cards',
          description: 'Draw one card, plus one per face-up Extortion plot.',
          order: OrderType.ORDERED,
          details: ['Draw one card. Then, draw an additional card for every Extortion plot you have face-up on the map. Finally, discard down to a hand size of five.']
        }
      ]
    }
  }
};