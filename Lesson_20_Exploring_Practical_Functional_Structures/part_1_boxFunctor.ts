interface Functor<T> {
    map<U>(fn: (value: T) => U): Functor<U>;
}

class Box<T> implements Functor<T> {
    constructor(private value: T) {}

    map<U>(fn: (value: T) => U): Functor<U> {
        return new Box(fn(this.value));
    }

    getValue(): T {
        return this.value;
    }
}

// Example usage
const box = new Box(5);
const mappedBox = box.map(value => value * 2);
console.log(mappedBox.getValue()); // Output: 10
