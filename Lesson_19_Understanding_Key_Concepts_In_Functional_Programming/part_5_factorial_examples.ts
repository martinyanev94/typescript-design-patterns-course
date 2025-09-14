function factorial(n: number): number {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
function factorialTail(n: number, accumulator: number = 1): number {
    return n <= 1 ? accumulator : factorialTail(n - 1, n * accumulator);
}
console.log(factorialTail(5)); // Output: 120
