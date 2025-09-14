const originalCircle = new Circle(10);
const clonedCircle = originalCircle.clone();

console.log(`Original Circle Radius: ${originalCircle.getRadius()}`); // 10
console.log(`Cloned Circle Radius: ${clonedCircle.getRadius()}`); // 10

const originalSquare = new Square(5);
const clonedSquare = originalSquare.clone();

console.log(`Original Square Side: ${originalSquare.getSide()}`); // 5
console.log(`Cloned Square Side: ${clonedSquare.getSide()}`); // 5
