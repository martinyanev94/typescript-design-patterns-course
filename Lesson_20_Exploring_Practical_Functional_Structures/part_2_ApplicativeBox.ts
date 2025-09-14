interface Applicative<T> extends Functor<T> {
    apply<U>(fnFunctor: Applicative<(value: T) => U>): Applicative<U>;
}

class Box<T> implements Applicative<T> {
    constructor(private value: T) {}

    map<U>(fn: (value: T) => U): Applicative<U> {
        return new Box(fn(this.value));
    }

    apply<U>(fnFunctor: Applicative<(value: T) => U>): Applicative<U> {
        return fnFunctor.map(fn => fn(this.value));
    }

    getValue(): T {
        return this.value;
    }
}

// Example usage
const boxValue = new Box(5);
const boxFunction = new Box((value: number) => value * 2);
const appliedBox = boxValue.apply(boxFunction);
console.log(appliedBox.getValue()); // Output: 10
