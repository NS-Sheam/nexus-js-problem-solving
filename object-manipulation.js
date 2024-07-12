const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
  },
];

const getBookTitles = (array) => array.map((book) => book.title);
console.log(getBookTitles(books));
