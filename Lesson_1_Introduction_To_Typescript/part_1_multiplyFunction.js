function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 4)); // 20
console.log(multiply("5", "4")); // "54"
function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(5, 4)); // 20
// console.log(multiply("5", "4")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
