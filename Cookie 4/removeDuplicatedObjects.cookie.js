// Let's declare our array of objects! 🎈
let anime = [
  { identifier: 1, name: "Naruto" },
  { identifier: 2, name: "Naruto Shippuden" },
  { identifier: 1, name: "Naruto" },
  { identifier: 3, name: "One Piece" },
];

// And now we remove duplicates using Map! 🗺
let animeWithoutDuplicates = [...new Map(anime.map(anime => [anime.identifier, anime])).values()];

// Printing results on screen. 💻
console.log(animeWithoutDuplicates);

/**
 * Prints: [
 *  { identifier: 1, name: 'Naruto' },
 *  { identifier: 2, name: 'Naruto Shippuden' },
 *  { identifier: 3, name: 'One Piece' }
 * ]
 */