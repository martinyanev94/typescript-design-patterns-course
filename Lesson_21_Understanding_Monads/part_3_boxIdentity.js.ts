const value = 5;
const addTwo = (x: number) => Box.of(x + 2);

const leftIdentity = Box.of(value)
    .flatMap(addTwo)
    .getValue();

console.log(leftIdentity); // Output: 7
console.log(addTwo(value).getValue()); // Output: 7
const rightIdentity = box.flatMap(Box.of).getValue();
console.log(rightIdentity); // Output: 5
