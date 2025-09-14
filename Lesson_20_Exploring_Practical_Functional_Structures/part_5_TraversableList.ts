interface Traversable<T> extends Functor<T> {
    traverse<U>(fn: (value: T) => Applicative<U>): Applicative<List<U>>;
}

class List<T> implements Traversable<T> {
    constructor(private elements: T[]) {}

    map<U>(fn: (value: T) => U): Traversable<U> {
        return new List(this.elements.map(fn));
    }

    traverse<U>(fn: (value: T) => Applicative<U>): Applicative<List<U>> {
        const applicatives = this.elements.map(fn);
        return applicatives.reduce((acc, applicative) => {
            return acc.apply(applicative);
        });
    }

    getElements(): T[] {
        return this.elements;
    }
}

// Example usage
const list = new List([1, 2, 3]);
const result = list.traverse(value => new Box(value * 2));
console.log(result); // Output: Box object with transformed values
