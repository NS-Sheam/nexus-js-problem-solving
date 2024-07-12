const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2019,
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2018,
  },
  {
    make: "Tesla",
    model: "Model S",
    year: 2021,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2020,
  },
];

const sortCarsByYear = (array) => {
  return array.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));
