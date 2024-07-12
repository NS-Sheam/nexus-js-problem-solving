const people = [
  {
    name: "Alice",
    age: 30,
    gender: "female",
  },
  {
    name: "Bob",
    age: 25,
    gender: "male",
  },
  {
    name: "Charlie",
    age: 35,
    gender: "male",
  },
  {
    name: "Diana",
    age: 28,
    gender: "female",
  },
];

const filterAndMapNames = (array) => {
  return array.filter((person) => person.gender !== "female").map((person) => person.name);
};

console.log(filterAndMapNames(people));
