
import { Faction, FactionId, OrderType } from '../types';

export const marquiseDeCat: Faction = {
  id: FactionId.MARQUISE_DE_CAT,
  name: 'Marquise de Cat',
  reach: 10,
  type: 'Militant',
  tagline: 'Engine of War. Rule the woods by building a massive, interconnected economy.',
  howToWin: 'Score victory points by building Workshops, Sawmills, and Recruiters. The more of a single building type you have, the more points the next one will be worth.',
  howToPlay: 'The Marquise de Cat plays a straightforward engine-building game. Your entire strategy revolves around wood. You build Sawmills to produce wood, and then spend that wood on other buildings to score points and improve your actions. Workshops allow you to craft, and Recruiters increase your board presence. The Keep is your fortress; you can only place warriors there through Field Hospitals, making it a vital defensive stronghold. Your power grows steadily as you build more and more, leading to an explosive late-game scoring potential if your economic engine is left unchecked.',
  strategy: 'Your opening move is critical. Establish your Sawmills early to start wood production. Protect these supply lines at all costs; an enemy who cuts off your wood supply can cripple your game. Use your large number of warriors to bully other factions and secure clearings for building. Don\'t neglect crafting—the Marquise can craft powerful cards that can swing the game. Your biggest challenge is your slow start. You need to survive the early game to build up your unstoppable industrial machine.',
  specialAbilities: [
    { title: 'The Keep', description: "You can place pieces in the clearing with the keep token, and other players cannot. If the keep token is ever removed, it cannot be placed again. This makes the clearing a permanent safe-zone for your Field Hospitals." },
    { title: 'Field Hospitals', description: "Whenever any number of your warriors are removed from a clearing, you may spend a card matching that clearing's suit to place the warriors at the Keep instead of your supply. Bird cards are wild. This is your key defensive tool." },
  ],
  setup: [
    "Gather Warriors and Wood: Form supplies of 25 warriors and 8 wood tokens.",
    "Place Keep: Place the keep token in a corner clearing. This is your starting clearing.",
    "Garrison: Place a warrior in each clearing on the map, except the one diagonally opposite from your keep.",
    "Place Starting Buildings: Place 1 sawmill, 1 workshop, and 1 recruiter. You may place them among the clearing with the keep token and any adjacent clearings, in any combination."
  ],
  turn: {
    Birdsong: {
      actions: [
        { 
          title: 'Place Wood', 
          description: 'Place one wood token at each of your sawmills.',
          order: OrderType.ORDERED,
          details: [
            "At the start of your turn, for every sawmill you have on the map, take one wood token from the supply and place it in the same clearing as that sawmill.",
            "Strategic Note: Wood is the lifeblood of your faction. Protect your sawmills to ensure you can continue building. Remember, your wood supply is finite (8 tokens total), so you must spend it to free up tokens for production. An enemy can choke your economy by camping on your wood tokens."
          ]
        }
      ]
    },
    Daylight: {
      actions: [
        {
          title: 'Take Daylight Actions',
          description: 'Take up to three actions, plus one additional action per bird card spent.',
          order: OrderType.ORDERED,
          details: [
            'You have a budget of three actions. You can increase this by spending bird cards from your hand; each bird card gives one extra action for the turn.',
            'Your choices are: Battle, March, Build, Recruit, and Overwork. You may perform actions in any order and can perform the same action multiple times (except for Recruit, which is once per turn).',
            'Strategic Note: Managing your actions is key. Bird cards are exceptionally valuable to you for the extra action, allowing you to build, move, and fight all in one massive turn.'
          ]
        },
        {
          title: 'Battle',
          description: 'Initiate a battle in a clearing where you have warriors.',
          order: OrderType.UNORDERED,
          details: [
            "Choose a clearing with your warriors and select an enemy to be the defender. Roll two dice. You deal hits equal to the higher roll, and the defender deals hits equal to the lower roll.",
            "Important: Your maximum hits from the roll is limited by the number of your warriors in that clearing. The defender must remove all their warriors before removing buildings or tokens. You score one victory point for each enemy building or token you remove.",
            "Strategic Note: Use your numerical superiority to initiate favorable battles and disrupt enemy plans. Removing enemy tokens and buildings not only scores points but can cripple their engine."
          ]
        },
        {
          title: 'March',
          description: 'Take up to two moves between clearings.',
          order: OrderType.UNORDERED,
          details: [
            "A single March action lets you perform up to two moves. For each move, you must rule either the origin or the destination clearing.",
            "Ruling a clearing means having more warriors and buildings than any other player. You can move any number of warriors in a single move. These two moves are independent; they don't have to start from the same clearing.",
            "Strategic Note: Use March to reinforce key positions, connect your wood supply lines, and position warriors for a future Build action."
          ]
        },
        {
          title: 'Build',
          description: 'Spend wood to place a building, scoring points.',
          order: OrderType.UNORDERED,
          details: [
            "Choose a clearing you rule. Select a building from your board (sawmill, workshop, or recruiter) and pay its wood cost, shown above its column.",
            "The wood cost is paid from the build clearing or from clearings connected to it by a chain of clearings you rule. This represents your supply line. Once placed, you immediately score the victory points revealed on your faction board.",
            "Strategic Note: Building is your primary way to score. Focus on one building type to accelerate down the track for higher VP gains. A well-defended supply line is crucial for expensive late-game buildings."
          ]
        },
        {
          title: 'Recruit',
          description: 'Once per turn, place one warrior at each recruiter.',
          order: OrderType.UNORDERED,
          details: [
            "This action places one new warrior from your supply into every clearing that has a recruiter. You may only take this action once per turn.",
            "Strategic Note: This is your main way of replenishing your army. Spreading out recruiters allows you to generate a massive number of warriors across the map with a single action."
          ]
        },
        {
          title: 'Overwork',
          description: 'Spend a matching card to place wood at a sawmill.',
          order: OrderType.UNORDERED,
          details: [
            "Choose one of your sawmills. Spend a card from your hand that matches the sawmill's clearing suit (bird cards are wild). Place one wood token in that clearing.",
            "Strategic Note: This is a vital action for getting extra wood when you're short for a crucial Build, or when an enemy is blockading your normal wood production. Don't underestimate its utility."
          ]
        }
      ]
    },
    Evening: {
      actions: [
        { 
          title: 'Draw Cards', 
          description: 'Draw one card, plus bonuses from your board.',
          order: OrderType.ORDERED,
          details: [
            "Draw one card from the deck. Then, look at your faction board. For each card symbol uncovered on your building tracks, draw one additional card.",
            "Strategic Note: Building more workshops and recruiters not only improves their respective actions but also significantly boosts your card draw, giving you more options."
          ]
        },
        {
          title: 'Discard to Hand Size',
          description: 'If you have more than five cards, discard down to five.',
          order: OrderType.ORDERED,
          details: [
            "Count the cards in your hand. If you have more than five, you must choose and discard cards until you have exactly five. This is a hard limit."
          ]
        }
      ]
    }
  }
};