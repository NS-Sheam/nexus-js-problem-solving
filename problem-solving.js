// Array Filtering and Mapping
const filterAndMapNames = (array) => {
  return array.filter((person) => person.gender !== "female").map((person) => person.name);
};
// Object Manipulation
const getBookTitles = (array) => array.map((book) => book.title);

// Function Composition
const square = (x) => x * x;
const double = (x) => x * 2;
const addFive = (x) => x + 5;
const compositeFn = (x) => addFive(double(square(x)));
// Sorting Objects
const sortCarsByYear = (array) => {
  return array.sort((a, b) => a.year - b.year);
};
// Find and Modifying
const updateAgeByName = (array, name, newAge) => {
  const person = array.find((person) => person.name === name);

  if (person) {
    person.age = newAge;
  }
  return array;
};
