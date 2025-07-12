
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const vagabond: Faction = {
  id: FactionId.VAGABOND,
  name: 'Vagabond',
  reach: 5,
  type: FactionType.INSURGENT,
  tagline: 'A Lone Wanderer. Forge your own path by completing quests, aiding or harming other factions, and exploring the ruins.',
  howToWin: 'Score victory points by improving Relationships with other factions, completing Quests, aiding Allied factions, and removing warriors of Hostile factions (Infamy). You can also form a Coalition with another player and share their victory.',
  mechanics: 'The Vagabond is a single pawn whose actions are determined by an inventory of Items. Boots let you move, Swords let you battle, Torches let you explore ruins for more items, and so on. To use an item, you must exhaust it (flip it face-down). At the start of your turn, you refresh a base number of items, plus more for each torch you have. If you take hits in battle, you must damage items, which cannot be used until repaired in a forest or with a hammer. A crucial mechanic is the Relationship track. By Aiding another faction (giving them a card that matches your clearing), you improve your relationship, score points, and take one of their crafted items. An Allied relationship lets you move and fight alongside that faction\'s warriors. Conversely, attacking a faction makes them Hostile, allowing you to score points for removing their pieces but making it harder to move through their territory.',
  howToPlay: 'The Vagabond is a single pawn playing an RPG in the middle of a war game. You do not have warriors and cannot rule clearings. Your entire turn is dictated by your inventory of Items. You are an opportunistic agent of chaos or order, depending on your playstyle. You can choose to be a helpful trader, a fearsome warrior, a dedicated quest-seeker, or a mix of all three. Your path to victory is flexible, relying on your ability to adapt to the changing state of the woodland and your relationships with its inhabitants.',
  strategy: 'Your character choice at setup will heavily influence your strategy. Your early game should focus on exploring ruins to build your item collection. Don\'t be afraid to take a little damage; ending your turn in a forest allows you to repair all your items for free. Aiding is your most reliable source of points and items. Target a player who is crafting a lot to get good items. Forming a Coalition is a powerful late-game move; if you are falling behind, find the player in second place who is struggling and offer them an alliance to secure a shared win.',
  specialAbilities: [
    { title: 'Lone Wanderer', description: 'Your pawn is not a warrior. It cannot be removed from the map (it takes damage to items instead) and it cannot rule clearings.' },
    { title: 'Nimble', description: 'You can move regardless of who rules your origin or destination clearing. You ignore the normal rule requirement for movement.' },
    { title: 'Items', description: 'Your capabilities depend on items you acquire. You exhaust items (flip them face-down) to take actions. Damaged items cannot be used until repaired.' },
    { title: 'Relationships', description: 'You track your relationship with each faction. It can range from Hostile, to Indifferent, to Friendly, to Allied. Aiding improves relationships, while attacking worsens them. Relationships determine scoring and special actions with that faction.' },
  ],
  setup: [
    "Choose Character: Select a Vagabond character card (e.g., Thief, Tinker, Ranger).",
    "Place Pawn: Place your pawn in any forest space on the map.",
    "Get Quests: Draw 3 quest cards and place them face-up.",
    "Populate Ruins & Take Items: Place items marked with 'R' under the ruin tokens, then take your character's specific starting items marked with 'S'.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Refresh',
          description: 'Flip three exhausted items face up, plus two per torch.',
          order: OrderType.ORDERED,
          details: [
            "At the start of your turn, you prepare your items. First, flip up three of your exhausted (face-down) items. Then, for each face-up torch you have, flip up two more exhausted items.",
            "Strategic Note: Torches are incredibly valuable as they directly increase the number of actions you can take each turn. Crafting or finding a second torch early is a huge power boost."
          ]
        },
        {
          title: 'Slip',
          description: 'Move to an adjacent clearing or forest without exhausting items.',
          order: OrderType.ORDERED,
          details: [
            "You may move your pawn to an adjacent clearing or forest. This single move is free and does not require you to exhaust any boots.",
            "This move also ignores rule and any effects that prevent movement (like a Corvid snare). It's perfect for positioning yourself for Daylight without spending resources."
          ]
        }
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Take Daylight Actions',
          description: 'Exhaust items to take the following actions in any order and number.',
          order: OrderType.ORDERED,
          details: [
            'Your turn revolves around exhausting your face-up items. Each action costs one or more items. You can perform these actions in any order, as many times as you have the items to exhaust.',
            'Example: If you have two face-up swords, you can initiate two battles.'
          ]
        },
        {
          title: 'Move',
          description: 'Exhaust a boot to move to an adjacent clearing.',
          order: OrderType.UNORDERED,
          details: [
            "Exhaust one boot. Move to an adjacent clearing (not a forest).",
            "Hostile Territory: If you move into a clearing containing warriors of a Hostile faction, you must exhaust one extra boot (total of two for that move)."
          ]
        },
        {
          title: 'Battle',
          description: 'Exhaust a sword to initiate a battle.',
          order: OrderType.UNORDERED,
          details: [
            "Exhaust one sword. Initiate a battle in your current clearing. Your maximum rolled hits equals your number of undamaged swords.",
            "Attacking with an Ally: If you are Allied with a faction and in a clearing with their warriors, you can choose to use their warriors for the attack instead of your pawn. This is very powerful.",
            "Taking Hits: When you take hits, you must damage one of your items for each hit. If you have no undamaged items, you ignore further hits."
          ]
        },
        {
          title: 'Explore',
          description: 'Exhaust a torch to take an item from a ruin.',
          order: OrderType.UNORDERED,
          details: [
            "Exhaust one torch. If you are in a clearing with a ruin token, take one item from under it and add it to your satchel. You score one victory point. If it was the last item, remove the ruin from the map.",
            "Strategic Note: Exploring is the primary way to get new items early in the game."
          ]
        },
        {
          title: 'Aid',
          description: 'Exhaust an item to give a card, improve relations, and take an item.',
          order: OrderType.UNORDERED,
          details: [
            "Exhaust any one item. Choose a player in your clearing and give them a card from your hand that matches the clearing's suit. This improves your relationship with them, scoring you 1 or 2 VP.",
            "Then, you may take one item of your choice from that player's Crafted Items box. Aiding is the only way to become Allied and is a fantastic source of both points and items.",
            "Strategic Note: Aid players who have crafted items you need. Bags, Boots, and Swords are excellent early targets."
          ]
        },
        {
          title: 'Quest',
          description: 'In a matching clearing, exhaust items to complete a quest.',
          order: OrderType.UNORDERED,
          details: [
            "If your pawn is in a clearing matching the suit of a face-up quest card, you may exhaust the two items pictured on the card to complete it.",
            "Reward: Choose one: draw two cards from the deck, OR score 1 VP per quest of that same suit you have completed (including this one)."
          ]
        },
        {
          title: 'Strike',
          description: 'Exhaust a crossbow to remove one enemy warrior.',
          order: OrderType.UNORDERED,
          details: [
            "Exhaust one crossbow. Remove one warrior of another player from your clearing. If they have no warriors, you may remove one of their buildings or tokens instead.",
            "Strategic Note: This is a targeted, risk-free attack that will make a faction Hostile. Use it to snipe key pieces like a sawmill or recruiter."
          ]
        },
        {
          title: 'Repair',
          description: 'Exhaust a hammer to fix one damaged item.',
          order: OrderType.UNORDERED,
          details: [
            "Exhaust one hammer. Move one item from your Damaged box back to your Satchel. It is now repaired and usable.",
            "Strategic Note: Essential for any Vagabond who gets into fights. A single hammer can keep your engine running."
          ]
        },
        {
          title: 'Special Action',
          description: 'Exhaust an item for your character\'s unique ability.',
          order: OrderType.UNORDERED,
          details: [
              "Each Vagabond character has a unique special action listed on their card, which costs a specific item to exhaust. For example, the Thief can exhaust a torch to steal a random card from a player in their clearing."
          ]
        },
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'An Evening\'s Rest',
          description: 'If in a forest, repair all your damaged items for free.',
          order: OrderType.ORDERED,
          details: [
            "If your pawn is in a forest space at the start of your Evening, move all items from your Damaged box to your Satchel. They are repaired and flipped face-up.",
            "Strategic Note: This is an incredibly powerful ability. If you take a lot of damage, ending your turn in a forest is a safe and efficient way to recover."
          ]
        },
        {
          title: 'Draw Cards',
          description: 'Draw one card, plus one per coin you have.',
          order: OrderType.ORDERED,
          details: [
            "Draw one card, plus one additional card for each coin you have. Coins are your key to card advantage, which can be turned into items and VP via the Aid action."
          ]
        },
        {
          title: 'Check Item Limit & Discard',
          description: 'Discard to 5 cards, then discard items if over your limit.',
          order: OrderType.ORDERED,
          details: [
            "First, discard cards from your hand until you have five. Then, check your item limit. Your base limit is six, plus two for each bag you have.",
            "If the number of items in your Satchel and Damaged box exceeds your limit, you must permanently remove items of your choice until you meet the limit. Bags are crucial for a heavy-item strategy."
          ]
        }
      ]
    }
  }
};