class Box<T> {
    constructor(private value: T) {}

    static of<U>(value: U): Box<U> {
        return new Box(value);
    }

    map<U>(fn: (value: T) => U): Box<U> {
        return Box.of(fn(this.value));
    }
    
    flatMap<U>(fn: (value: T) => Box<U>): Box<U> {
        return fn(this.value);
    }

    getValue(): T {
        return this.value;
    }
}

// Example usage
const box = Box.of(5);
const newBox = box.map(value => value * 2);
console.log(newBox.getValue()); // Output: 10
const result = box
    .flatMap(value => Box.of(value + 2))
    .flatMap(value => Box.of(value * 3));

console.log(result.getValue()); // Output: 21
