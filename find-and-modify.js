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

const updateAgeByName = (array, name, newAge) => {
  const person = array.find((person) => person.name === name);

  if (person) {
    person.age = newAge;
  }
  return array;
};

console.log(updateAgeByName(people, "Charlie", 44));
