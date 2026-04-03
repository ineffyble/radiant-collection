export interface PokemonCard {
  id: string;
  name: string;
  number: number;
  rarity: string;
  imageUrl: string;
}

export interface CardSet {
  id: string;
  name: string;
  totalCards: number;
  prefix: string;
  cards: PokemonCard[];
}

export const RADIANT_COLLECTIONS: CardSet[] = [
  {
    id: 'rc1',
    name: 'Legendary Treasures: Radiant Collection',
    totalCards: 25,
    prefix: 'RC',
    cards: [
      { id: 'bw11-RC1', name: 'Snivy', number: 1, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC1_hires.png' },
      { id: 'bw11-RC2', name: 'Servine', number: 2, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC2_hires.png' },
      { id: 'bw11-RC3', name: 'Serperior', number: 3, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/bw11/RC3_hires.png' },
      { id: 'bw11-RC4', name: 'Growlithe', number: 4, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/bw11/RC4_hires.png' },
      { id: 'bw11-RC5', name: 'Torchic', number: 5, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC5_hires.png' },
      { id: 'bw11-RC6', name: 'Piplup', number: 6, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/bw11/RC6_hires.png' },
      { id: 'bw11-RC7', name: 'Pikachu', number: 7, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/bw11/RC7_hires.png' },
      { id: 'bw11-RC8', name: 'Ralts', number: 8, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC8_hires.png' },
      { id: 'bw11-RC9', name: 'Kirlia', number: 9, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC9_hires.png' },
      { id: 'bw11-RC10', name: 'Gardevoir', number: 10, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/bw11/RC10_hires.png' },
      { id: 'bw11-RC11', name: 'Meloetta-EX', number: 11, rarity: 'Rare Holo EX', imageUrl: 'https://images.pokemontcg.io/bw11/RC11_hires.png' },
      { id: 'bw11-RC12', name: 'Stunfisk', number: 12, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/bw11/RC12_hires.png' },
      { id: 'bw11-RC13', name: 'Purrloin', number: 13, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/bw11/RC13_hires.png' },
      { id: 'bw11-RC14', name: 'Eevee', number: 14, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/bw11/RC14_hires.png' },
      { id: 'bw11-RC15', name: 'Teddiursa', number: 15, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC15_hires.png' },
      { id: 'bw11-RC16', name: 'Ursaring', number: 16, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC16_hires.png' },
      { id: 'bw11-RC17', name: 'Audino', number: 17, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC17_hires.png' },
      { id: 'bw11-RC18', name: 'Minccino', number: 18, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC18_hires.png' },
      { id: 'bw11-RC19', name: 'Cinccino', number: 19, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/bw11/RC19_hires.png' },
      { id: 'bw11-RC20', name: 'Elesa', number: 20, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/bw11/RC20_hires.png' },
      { id: 'bw11-RC21', name: 'Shaymin-EX', number: 21, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/bw11/RC21_hires.png' },
      { id: 'bw11-RC22', name: 'Reshiram', number: 22, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/bw11/RC22_hires.png' },
      { id: 'bw11-RC23', name: 'Emolga', number: 23, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/bw11/RC23_hires.png' },
      { id: 'bw11-RC24', name: 'Mew-EX', number: 24, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/bw11/RC24_hires.png' },
      { id: 'bw11-RC25', name: 'Meloetta-EX', number: 25, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/bw11/RC25_hires.png' },
    ]
  },
  {
    id: 'rc2',
    name: 'Generations: Radiant Collection',
    totalCards: 32,
    prefix: 'RC',
    cards: [
      { id: 'g1-RC1', name: 'Chikorita', number: 1, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC1_hires.png' },
      { id: 'g1-RC2', name: 'Shroomish', number: 2, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC2_hires.png' },
      { id: 'g1-RC3', name: 'Charmander', number: 3, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC3_hires.png' },
      { id: 'g1-RC4', name: 'Charmeleon', number: 4, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC4_hires.png' },
      { id: 'g1-RC5', name: 'Charizard', number: 5, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC5_hires.png' },
      { id: 'g1-RC6', name: 'Flareon-EX', number: 6, rarity: 'Rare Holo EX', imageUrl: 'https://images.pokemontcg.io/g1/RC6_hires.png' },
      { id: 'g1-RC7', name: 'Snorunt', number: 7, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC7_hires.png' },
      { id: 'g1-RC8', name: 'Froslass', number: 8, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC8_hires.png' },
      { id: 'g1-RC9', name: 'Raichu', number: 9, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC9_hires.png' },
      { id: 'g1-RC10', name: 'Dedenne', number: 10, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC10_hires.png' },
      { id: 'g1-RC11', name: 'Wobbuffet', number: 11, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC11_hires.png' },
      { id: 'g1-RC12', name: 'Gulpin', number: 12, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC12_hires.png' },
      { id: 'g1-RC13', name: 'Jirachi', number: 13, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC13_hires.png' },
      { id: 'g1-RC14', name: 'Espurr', number: 14, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC14_hires.png' },
      { id: 'g1-RC15', name: 'Meowstic', number: 15, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC15_hires.png' },
      { id: 'g1-RC16', name: 'Yveltal', number: 16, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC16_hires.png' },
      { id: 'g1-RC17', name: 'Flabébé', number: 17, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC17_hires.png' },
      { id: 'g1-RC18', name: 'Floette', number: 18, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC18_hires.png' },
      { id: 'g1-RC19', name: 'Swirlix', number: 19, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC19_hires.png' },
      { id: 'g1-RC20', name: 'Slurpuff', number: 20, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC20_hires.png' },
      { id: 'g1-RC21', name: 'Sylveon-EX', number: 21, rarity: 'Rare Holo EX', imageUrl: 'https://images.pokemontcg.io/g1/RC21_hires.png' },
      { id: 'g1-RC22', name: 'Diancie', number: 22, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC22_hires.png' },
      { id: 'g1-RC23', name: 'Swablu', number: 23, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC23_hires.png' },
      { id: 'g1-RC24', name: 'Altaria', number: 24, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC24_hires.png' },
      { id: 'g1-RC25', name: 'Fletchling', number: 25, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC25_hires.png' },
      { id: 'g1-RC26', name: 'Floral Crown', number: 26, rarity: 'Common', imageUrl: 'https://images.pokemontcg.io/g1/RC26_hires.png' },
      { id: 'g1-RC27', name: 'Wally', number: 27, rarity: 'Uncommon', imageUrl: 'https://images.pokemontcg.io/g1/RC27_hires.png' },
      { id: 'g1-RC28', name: 'Flareon-EX', number: 28, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/g1/RC28_hires.png' },
      { id: 'g1-RC29', name: 'Pikachu', number: 29, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/g1/RC29_hires.png' },
      { id: 'g1-RC30', name: 'Gardevoir-EX', number: 30, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/g1/RC30_hires.png' },
      { id: 'g1-RC31', name: 'M Gardevoir-EX', number: 31, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/g1/RC31_hires.png' },
      { id: 'g1-RC32', name: 'Sylveon-EX', number: 32, rarity: 'Rare Ultra', imageUrl: 'https://images.pokemontcg.io/g1/RC32_hires.png' },
    ]
  }
];

