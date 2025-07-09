
import { Faction, FactionId, OrderType } from '../types';

export const eyrieDynasties: Faction = {
  id: FactionId.EYRIE_DYNASTIES,
  name: 'Eyrie Dynasties',
  reach: 7,
  type: 'Militant',
  tagline: 'The Old Kingdom. Regain control of the woodland by managing your ever-growing Decree.',
  howToWin: 'Score victory points each Evening based on the number of Roosts on the map. The more Roosts you have, the more points you score.',
  howToPlay: 'The Eyrie Dynasties are a high-risk, high-reward faction governed by the Decree, a rigid set of actions they must perform every turn. Each turn, you must add one or two cards to the Decree, expanding the list of mandatory actions. During Daylight, you must resolve every single card in the Decree, from left to right. If you fail to perform any action fully, you fall into Turmoil—a catastrophic event where you lose points, your leader is deposed, and your Decree is wiped clean. Your goal is to build and protect Roosts, as they determine your VP score in the evening. Your choice of leader dictates your starting Decree and a special ability, shaping your strategy for that reign.',
  strategy: 'Success with the Eyrie is all about managing the Decree. Plan your turns far in advance. Don\'t get greedy; adding too many cards to make your Decree impossible to fulfill, leading to Turmoil. Bird cards are a double-edged sword: they can be used for any suit, making your Decree flexible, but they also cost you more victory points if you fall into Turmoil. Sometimes, a planned Turmoil can be a strategic way to reset a failing Decree and switch to a more suitable leader. Your special ability, "Lords of the Forest," is incredibly powerful for establishing rule, so use it to your advantage to build Roosts in contested clearings.',
  specialAbilities: [
      { title: 'Lords of the Forest', description: 'You rule a clearing when tied for the most combined warriors and buildings there, as long as you have at least one piece there. This is a significant advantage over other factions.' },
      { title: 'Disdain for Trade', description: 'When crafting items, you ignore the listed victory points and score only one. This makes item crafting less of a priority for scoring.' },
  ],
  setup: [
      "Gather Warriors: Form a supply of 20 warriors.",
      "Place Roost & Warriors: Place 1 Roost and 6 warriors in a corner clearing.",
      "Choose Leader: Choose 1 of the 4 Eyrie leader cards (Builder, Charismatic, Commander, or Despot).",
      "Tuck Viziers: Tuck your 2 Loyal Vizier cards (which are bird cards) into the Decree columns as shown on your chosen leader card.",
  ],
  turn: {
    Birdsong: {
      actions: [
        { 
          title: 'Emergency Orders', 
          description: 'If you have no cards in your hand, draw one card.',
          order: OrderType.ORDERED,
          details: [
            "At the very start of your Birdsong, if your hand is empty, you must draw one card. This ensures you always have a card to add to the Decree, preventing an automatic Turmoil."
          ]
        },
        {
          title: 'Add to the Decree',
          description: 'You MUST add one or two cards to any column of the Decree.',
          order: OrderType.ORDERED,
          details: [
            "You must add either one or two cards from your hand to the Decree's columns (Recruit, Move, Battle, Build).",
            "Critical Rule: Of the cards you add this turn, a maximum of one can be a bird card. This restriction is central to planning your turn. Placing cards in the right columns is the core puzzle of the Eyrie.",
            "Strategic Note: Think carefully. Every card you add is a promise you must keep. An extra battle in a suit where you have no targets will cause Turmoil. Plan several turns ahead."
          ]
        }
      ]
    },
    Daylight: {
      actions: [
        {
          title: 'Craft',
          description: 'You may use your Roosts to craft cards.',
          order: OrderType.ORDERED,
          details: [
            "You may activate your Roosts to craft cards. A Roost provides the suit of its clearing. Each Roost can be activated once per turn.",
            "Reminder: Your 'Disdain for Trade' ability means you only score 1 VP for crafted items, but the card effects themselves can be game-changing."
          ]
        },
        {
          title: 'Resolve the Decree',
          description: 'You MUST resolve all cards in your Decree, from left to right.',
          order: OrderType.ORDERED,
          details: [
            "This is the heart of your turn. Starting with the Recruit column, you must perform the action for every card in that column. Then proceed to Move, then Battle, then Build.",
            "Failure Rule: If you cannot fully perform an action (e.g., must move but can't, must battle but have no valid targets), you immediately fall into Turmoil. Your turn ends, you lose 1 VP per bird card in your Decree, your leader is deposed, and you wipe the Decree clean except for your Viziers."
          ]
        }
      ]
    },
    Evening: {
      actions: [
        {
          title: 'Score Points',
          description: 'Score VP based on the number of Roosts on the map.',
          order: OrderType.ORDERED,
          details: [
            "Count your Roosts on the map. Score the victory points shown on the rightmost empty space of your Roosts track on your faction board.",
            "Strategic Note: This is your primary scoring engine. Building Roosts is essential. The more you build, the faster your score accelerates. Protect them fiercely."
          ]
        },
        {
          title: 'Draw and Discard',
          description: 'Draw one card plus bonuses, then discard to five if needed.',
          order: OrderType.ORDERED,
          details: [
            "Draw one card, plus one additional card for each uncovered bonus on your Roosts track. Then, if you have more than five cards in your hand, discard down to five.",
            "Strategic Note: Building Roosts not only increases your scoring but also your card draw, which is vital for feeding the Decree."
          ]
        }
      ]
    }
  }
};