class Effect<T> {
    constructor(private operation: () => Promise<T>) {}

    static of<U>(value: U): Effect<U> {
        return new Effect(() => Promise.resolve(value));
    }

    flatMap<U>(fn: (value: T) => Effect<U>): Effect<U> {
        return new Effect(async () => {
            const value = await this.operation();
            return (await fn(value).operation());
        });
    }

    run(): Promise<T> {
        return this.operation();
    }
}

// Example usage
const fetchData = (id: number): Effect<string> => {
    return new Effect(() => new Promise(resolve => {
        setTimeout(() => resolve(`Data for ID: ${id}`), 1000);
    }));
};

const effect = Effect.of(1)
    .flatMap(fetchData);

effect.run().then(result => console.log(result)); // Output: Data for ID: 1 (after 1 second)
