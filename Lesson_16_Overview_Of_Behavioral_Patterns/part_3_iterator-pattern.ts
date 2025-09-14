interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}

class ArrayIterator<T> implements Iterator<T> {
    private index = 0;

    constructor(private collection: T[]) {}

    hasNext(): boolean {
        return this.index < this.collection.length;
    }

    next(): T {
        return this.collection[this.index++];
    }
}

class Collection<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getIterator(): ArrayIterator<T> {
        return new ArrayIterator(this.items);
    }
}

// Client code
const collection = new Collection<number>();
collection.add(1);
collection.add(2);
collection.add(3);

const iterator = collection.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
// Output: 1 2 3
