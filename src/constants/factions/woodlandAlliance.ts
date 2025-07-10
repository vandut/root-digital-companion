
import { Faction, FactionId, OrderType } from '../types';

export const woodlandAlliance: Faction = {
  id: FactionId.WOODLAND_ALLIANCE,
  name: 'Woodland Alliance',
  reach: 3,
  type: 'Insurgent',
  tagline: 'Rebellion. Gain the sympathy of the oppressed creatures of the woodland and incite a revolt.',
  howToWin: 'Score victory points by spreading Sympathy across the map. The more Sympathy tokens on the map, the more points you score when you place the next one.',
  mechanics: 'The Alliance has several unique components. Supporters are a secret stack of cards you build by using the Mobilize action; these cards are the currency for your most powerful actions. Sympathy tokens are your primary way of scoring and establishing a board presence. You spend supporters to place them, with the cost increasing based on the number of enemy warriors in the target clearing. Bases are your strongholds, established by using the powerful Revolt action in a sympathetic clearing. Each of the three bases (Fox, Rabbit, Mouse) allows you to Train Officers. Officers are your military action points for the Evening. Finally, your Guerilla War ability reverses battle rolls when you are defending, making you a formidable opponent to attack.',
  howToPlay: 'The Woodland Alliance operates in the shadows, building a grassroots rebellion. You start with no pieces on the map, focusing first on gathering cards into your Supporters stack. From there, you begin to Spread Sympathy, which scores points and sets the stage for future actions. Your big move is the Revolt, which removes all enemy pieces in a clearing and establishes a permanent Base. Bases allow you to train Officers, which in turn let you take military actions like Move and Battle in the Evening. You are a guerrilla force, strong on defense and capable of sudden, explosive uprisings.',
  strategy: 'Your early game is about gaining supporters and spreading sympathy to unpopular clearings (those with lots of enemy pieces) to trigger "Outrage" and get free supporters from other players. Avoid direct conflict until you are ready. Choose your revolt locations carefully; a well-placed base in a central, easily-defended clearing can secure a region and give you a new front for training and military operations. Your hand size is your lifeblood—more cards mean more supporters, so protect clearings where you can gain card advantage.',
  specialAbilities: [
      { title: 'Guerrilla War', description: 'As defender in battle, you deal hits equal to the higher roll, and the attacker deals hits equal to the lower roll. This reverses the normal combat roles.' },
      { title: 'Supporters', description: 'You maintain a face-down pile of cards called Supporters. These are spent to fuel your actions and do not count against your hand size. If you have no bases, your supporter stack is limited to five cards.' },
      { title: 'Outrage', description: 'When another player removes one of your sympathy tokens or moves warriors into a sympathetic clearing, they must give you a card from their hand matching the clearing. If they can\'t, they must show you their hand, and you draw a card from the deck. This is a key source of supporters.' },
  ],
  setup: [
      "Gather Warriors: Form a supply of 10 warriors.",
      "Place Bases: Place your 3 bases in your Bases box. Each corresponds to a suit.",
      "Fill Sympathy Track: Place all 10 Sympathy tokens on your track.",
      "Gain Supporters: Draw 3 cards from the deck and place them face down as your first supporters.",
  ],
  turn: {
    Birdsong: {
      actions: [
        {
          title: 'Revolt',
          description: 'Spend two matching supporters to place a base, removing all enemy pieces.',
          order: OrderType.ORDERED,
          details: [
            "You may perform this action any number of times. Choose a sympathetic clearing that matches a base in your box. Spend two supporter cards of that same suit.",
            "Effect: Remove ALL enemy pieces in that clearing (you score 1 VP per building/token). Then, place the matching base and add warriors equal to the number of sympathetic clearings of that suit on the map. Finally, one of these warriors becomes an Officer.",
            "Strategic Note: This is your game-changing move. Use it to shatter an opponent's stronghold and establish your own permanent presence."
          ]
        },
        {
          title: 'Spread Sympathy',
          description: 'Spend supporters to place a Sympathy token, scoring VPs.',
          order: OrderType.ORDERED,
          details: [
            "You may perform this action any number of times. Choose an unsympathetic clearing adjacent to a sympathetic one (or any clearing if you have no sympathy on the board).",
            "Spend supporters matching the target clearing's suit. The cost (1, 2, or 3) is listed above the leftmost sympathy token on your track. Place a token and score the revealed VP.",
            "Martial Law: If the target clearing has at least 3 warriors of any one player, you must spend one additional matching supporter.",
            "Strategic Note: This is your bread-and-butter scoring action. Chain sympathy tokens across the board to maximize your reach."
          ]
        }
      ]
    },
    Daylight: {
      actions: [
        {
          title: 'Perform Daylight Actions',
          description: 'You may take any of the following actions in any order and number.',
          order: OrderType.ORDERED,
          details: [
              'During Daylight, you can perform any combination of Crafting, Mobilizing, and Training. There is no limit to how many times you can perform each of these actions, as long as you can meet their requirements.'
          ]
        },
        {
          title: 'Craft',
          description: 'Use your Sympathy tokens to craft cards.',
          order: OrderType.UNORDERED,
          details: [
            "You may activate your Sympathy tokens to craft. A Sympathy token provides the suit of its clearing. Each token can be used once per turn.",
            "Strategic Note: Don't neglect crafting. Spreading sympathy also builds a powerful crafting network."
          ]
        },
        {
          title: 'Mobilize',
          description: 'Add a card from your hand to your Supporters stack.',
          order: OrderType.UNORDERED,
          details: [
            "Take any one card from your hand and place it face-down onto your Supporters stack. This is how you fuel your powerful Birdsong actions.",
            "Strategic Note: You must constantly feed your supporter stack. A big hand of cards translates directly into a big next turn."
          ]
        },
        {
          title: 'Train',
          description: 'Spend a card matching a base to gain an officer.',
          order: OrderType.UNORDERED,
          details: [
            "Spend a card from your hand matching the suit of a base you have on the map. Move one warrior from your supply to your Officers box.",
            "Strategic Note: Officers are your bottleneck for military action. You must build a base and then train to be able to train officers for Move, Battle, Recruit, or Organize actions in the Evening."
          ]
        }
      ]
    },
    Evening: {
      actions: [
        {
          title: 'Military Operations',
          description: 'Take actions up to your number of officers.',
          order: OrderType.ORDERED,
          details: [
            'You may perform a number of military actions equal to the number of officers you have. Your choices are Move, Battle, Recruit, and Organize. You can take them in any order and repeat them.'
          ]
        },
         {
          title: 'Move',
          description: 'Take one move.',
          order: OrderType.UNORDERED,
          details: ['As a military operation, you can take a single move action. You must rule the origin or destination clearing.']
        },
        {
          title: 'Battle',
          description: 'Initiate a battle.',
          order: OrderType.UNORDERED,
          details: ['As a military operation, you can initiate a battle in a clearing where you have warriors. Remember your Guerrilla War ability applies when defending.']
        },
        {
          title: 'Recruit',
          description: 'Place a warrior in a clearing with a base.',
          order: OrderType.UNORDERED,
          details: ['As a military operation, you may place one warrior from your supply into any clearing containing one of your bases.']
        },
        {
          title: 'Organize',
          description: "Replace a warrior with a sympathy token, scoring points.",
          order: OrderType.UNORDERED,
          details: [
              "This is a crucial military action. Remove one of your warriors from an unsympathetic clearing to place a sympathy token there from your board.",
              "You immediately score the VP revealed. This is a great way to spread sympathy without spending supporters, but it costs you a warrior and a precious military action."
          ]
        },
        {
          title: 'Draw and Discard',
          description: 'Draw one card plus bonuses, then discard to five.',
          order: OrderType.ORDERED,
          details: [
            "Draw one card, plus one for each uncovered bonus on your Sympathy track. Discard down to five cards. The more sympathy you spread, the better your card draw becomes."
          ]
        }
      ]
    }
  }
};