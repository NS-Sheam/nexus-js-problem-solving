const square = (x) => x * x;
const double = (x) => x * 2;
const addFive = (x) => x + 5;
const compositeFn = (x) => addFive(double(square(x)));

console.log(compositeFn(3));
