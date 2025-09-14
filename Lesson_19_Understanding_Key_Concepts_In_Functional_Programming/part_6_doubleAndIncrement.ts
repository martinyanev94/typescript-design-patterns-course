function double(x: number): number {
    return x * 2;
}

function increment(x: number): number {
    return x + 1;
}

const doubleAndIncrement = (x: number): number => increment(double(x));
console.log(doubleAndIncrement(3)); // Output: 7
