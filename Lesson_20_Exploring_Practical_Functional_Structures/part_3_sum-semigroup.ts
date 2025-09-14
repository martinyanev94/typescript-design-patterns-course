interface Semigroup<T> {
    concat(other: T): T;
}

class Sum implements Semigroup<Sum> {
    constructor(private value: number) {}

    concat(other: Sum): Sum {
        return new Sum(this.value + other.value);
    }

    getValue(): number {
        return this.value;
    }
}

// Example usage
const sum1 = new Sum(5);
const sum2 = new Sum(10);
const combinedSum = sum1.concat(sum2);
console.log(combinedSum.getValue()); // Output: 15
