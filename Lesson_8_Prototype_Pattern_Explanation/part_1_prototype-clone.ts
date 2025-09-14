interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype implements Prototype {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public clone(): Prototype {
        return new ConcretePrototype(this.state);
    }

    public getState(): string {
        return this.state;
    }
}
