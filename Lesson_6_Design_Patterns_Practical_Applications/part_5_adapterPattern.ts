interface Target {
    request(): string;
}

class Adaptee {
    public specificRequest(): string {
        return 'Specific request from the Adaptee.';
    }
}

class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    public request(): string {
        return this.adaptee.specificRequest();
    }
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log(adapter.request()); // Output: Specific request from the Adaptee.
