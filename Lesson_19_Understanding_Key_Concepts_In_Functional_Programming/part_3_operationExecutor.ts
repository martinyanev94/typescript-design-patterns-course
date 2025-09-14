function executeOperation(x: number, y: number, operation: (a: number, b: number) => number): number {
    return operation(x, y);
}

const add = (a: number, b: number) => a + b;
const multiply = (a: number, b: number) => a * b;

console.log(executeOperation(5, 3, add));      // Output: 8
console.log(executeOperation(5, 3, multiply)); // Output: 15
