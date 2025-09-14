interface Monoid<T> extends Semigroup<T> {
    empty(): T;
}

class Sum implements Monoid<Sum> {
    constructor(private value: number) {}

    concat(other: Sum): Sum {
        return new Sum(this.value + other.value);
    }

    empty(): Sum {
        return new Sum(0);
    }

    getValue(): number {
        return this.value;
    }
}

// Example usage
const sum1 = new Sum(5);
const sum2 = new Sum(10);
const sumIdentity = sum1.concat(sum1.empty());
console.log(sumIdentity.getValue()); // Output: 5
