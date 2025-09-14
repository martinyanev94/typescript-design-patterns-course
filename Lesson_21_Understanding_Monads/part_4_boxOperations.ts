const multiplyByTwo = (x: number) => Box.of(x * 2);
const subtractThree = (x: number) => Box.of(x - 3);

const resultA = box
    .flatMap(multiplyByTwo)
    .flatMap(subtractThree)
    .getValue();

const resultB = box
    .flatMap(value => multiplyByTwo(value).flatMap(subtractThree))
    .getValue();

console.log(resultA); // Output: 7
console.log(resultB); // Output: 7
