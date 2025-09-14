class Maybe<T> {
    constructor(private value?: T) {}

    static of<U>(value?: U): Maybe<U> {
        return new Maybe(value);
    }

    isNothing(): boolean {
        return this.value === undefined || this.value === null;
    }

    flatMap<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
        return this.isNothing() ? Maybe.of<U>() : fn(this.value as T);
    }

    getValue(): T | undefined {
        return this.value;
    }
}

// Example usage
const maybeValue = Maybe.of(5);
const result = maybeValue
    .flatMap(value => Maybe.of(value + 1))
    .flatMap(value => Maybe.of(value * 2));

console.log(result.getValue()); // Output: 12
