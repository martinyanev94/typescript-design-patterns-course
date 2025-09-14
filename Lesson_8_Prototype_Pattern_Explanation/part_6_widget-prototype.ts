let widgetIdCounter = 1;

class Widget implements Prototype {
    constructor(private id: number, private name: string) {}

    public clone(): Widget {
        return new Widget(widgetIdCounter++, this.name); // New ID for each clone
    }

    public getName(): string {
        return this.name;
    }
}
