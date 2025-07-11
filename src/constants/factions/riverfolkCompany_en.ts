
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const riverfolkCompany: Faction = {
  id: FactionId.RIVERFOLK_COMPANY,
  name: 'Riverfolk Company',
  reach: 5,
  type: FactionType.INSURGENT,
  tagline: 'Masters of Commerce. Profit from the war by selling your services and establishing a trade empire.',
  howToWin: 'Score victory points by placing trade posts. You also score points (Dividends) based on your hoard of funds at the end of your turn.',
  mechanics: 'The Riverfolk\'s core mechanic is commerce. You offer Services (Hand Cards, Riverboats, Mercenaries) that other players can buy at the start of their turn. The price is set by you. When a player buys a service, they pay you with their own warriors, which you place in your Funds box. These Funds are your currency to take actions. Actions can be taken by either Committing a fund (placing it in your Committed box, to be returned next turn) for repeatable actions like Move or Battle, or by Spending a fund (returning it to its owner\'s supply) for permanent actions like building Trade Posts. Trade Posts are your main source of victory points and also serve as crafting stations. The more you build, the more services you can sell. Finally, you can score Dividends at the start of your turn based on the number of warriors in your Funds box.',
  howToPlay: 'The Riverfolk Company are the merchants of Root. You are a highly interactive faction that depends on other players to fuel your economy. Your turn involves managing your public hand of cards, setting prices for your services, and then using the funds you\'ve earned to expand your own presence by building trade posts. You must carefully balance making your services attractive enough for others to buy without giving them too much of an advantage. Your ability to use rivers as paths gives you great mobility to establish your trade empire across the map.',
  strategy: 'Your success depends on your ability to price your services effectively. If prices are too high, no one will buy, and your economy will stall. If they\'re too low, you\'ll give your opponents too much for too little. Watch what other players need. If someone is stuck, sell them river movement! If someone needs a card for crafting, sell them one! Use your funds to establish trade posts in high-traffic, easy-to-defend river clearings. A large pile of funds can also score you "Dividends," offering a path to victory through pure wealth. Don\'t forget to use your own services if no one else is buying.',
  specialAbilities: [
    { title: 'Swimmers', description: 'You can treat rivers as paths for movement, allowing for rapid repositioning along the waterways.' },
    { title: 'Public Hand', description: 'Your hand of cards is always face up for all players to see. This allows others to see what you are selling.' },
    { title: 'Funds', description: 'Your warriors and the warriors of other factions that pay you are held in your Funds box. This is the currency you spend to take actions.' },
    { title: 'Buying Services', description: 'At the start of their turn, other players may buy your services (Hand Card, Riverboats, Mercenaries). The price is set by you at the end of your turn.' },
  ],
  setup: [
    "Gather Warriors: Form a supply of 15 warriors.",
    "Place Warriors: Place a total of 4 warriors in any clearings touching a river.",
    "Fill Trade Post Tracks: Place your 9 trade posts on your faction board.",
    "Gain Starting Funds: Place 3 of your own warriors in your Payments box. These will become your first funds.",
    "Set Starting Prices: Place one service marker on any space on each of your three Services tracks.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Protectionism',
          description: 'If your Payments box is empty, place two of your warriors in it.',
          order: OrderType.ORDERED,
          details: ['A safety net. If no one bought your services on the last round of turns, you gain two of your own warriors as funds to keep your business running.']
        },
        {
          title: 'Score Dividends',
          description: 'If you have any trade posts on the map, score 1 VP per two funds you have.',
          order: OrderType.ORDERED,
          details: ['Count the number of warriors in your Funds box. If you have at least one trade post on the map, you score one victory point for every two funds you possess. This can be a significant source of points.']
        },
        {
          title: 'Gather Funds',
          description: 'Move all warriors from Payments and Committed boxes to your Funds box.',
          order: OrderType.ORDERED,
          details: ['Take all warriors that other players used to pay you, and any you committed to actions last turn, and move them into your main Funds box. These are now available to spend.']
        },
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Commit and Spend Funds',
          description: 'Take actions by moving warriors from your Funds box.',
          order: OrderType.ORDERED,
          details: [
            "Your warriors in your Funds box are your currency. There are two ways to use them:",
            "Commit: Move a warrior to the 'Committed' box. You get this warrior back next turn. This is for repeatable actions like Move, Battle, Draw, and Craft.",
            "Spend: Return a warrior to its owner's supply. This warrior is gone for good. This is for powerful, permanent actions like Recruit and Establish Trade Post."
          ]
        },
        {
          title: 'Move/Battle/Draw',
          description: 'Commit one fund to take a move, initiate a battle, or draw a card.',
          order: OrderType.UNORDERED,
          details: ['These are your basic, repeatable actions. Move a warrior from your Funds box to your Committed box to perform one of these actions.']
        },
        {
          title: 'Craft',
          description: 'Commit funds to craft a card from your hand.',
          order: OrderType.UNORDERED,
          details: ['To craft, commit funds by moving them to the crafting cost spaces on your Trade Post tracks. The suits required are shown on the track. These funds are returned to you next turn.']
        },
        {
          title: 'Recruit',
          description: 'Spend one fund to place a warrior in a river clearing.',
          order: OrderType.UNORDERED,
          details: ['Return a warrior from your Funds box to its owner\'s supply to place one of your warriors in any clearing with a river. This is how you increase your board presence.']
        },
        {
          title: 'Establish Trade Post',
          description: 'Spend two funds of the ruling player to place a trade post.',
          order: OrderType.UNORDERED,
          details: ['This is your primary scoring action. Choose a clearing ruled by any player (including yourself). Spend two funds belonging to that player to build a trade post of the matching suit there. Score the revealed victory points immediately.']
        },
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Discard Cards',
          description: 'If you have more than five cards, discard down to five.',
          order: OrderType.ORDERED,
          details: ['Your hand size limit is five. Discard any excess cards.']
        },
        {
          title: 'Set Costs',
          description: 'Adjust the price for each of your services.',
          order: OrderType.ORDERED,
          details: ['You may move the service markers on your faction board to change the price (from 1 to 4) for other players to buy your services on their next turn. This is a critical strategic decision.']
        }
      ]
    }
  }
};