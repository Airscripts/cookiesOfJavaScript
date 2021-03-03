// Let's declare our friend for this cookie! 💪🏻
let books = [
  { identifier: 0, title: "Jurassic Park", pages: 448 },
  { identifier: 1, title: "Harry Potter", pages: 3872 },
  { identifier: 2, title: "The Lord of the Rings", pages: 1601 },
]

// Let's use .map() to cycle through the books and get identifiers. 🚴🏻‍♀️
let booksIdentifiers = books.map((book) => book.identifier);
console.log(booksIdentifiers); // Prints [0, 1, 2];

// Let's use .filter() to filter our books and get one specific book. 🛒
let jurassicParkBook = books.filter((book) => book.title === "Jurassic Park");
console.log(jurassicParkBook); // Prints [{ identifier: 0, title: "Jurassic Park", pages: 448 }];

// Let's use .reduce() to count up all books pages. 🔢
let totalBooksPages = books.reduce((pages, book) => pages + book.pages, 0);
console.log(totalBooksPages); // Prints 5921;

// Don't forget to follow me on Twitter: @airscript 🚀