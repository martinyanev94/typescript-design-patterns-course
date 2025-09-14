class Pizza {
    private size: string;
    private toppings: string[];
    private crust: string;

    constructor(builder: PizzaBuilder) {
        this.size = builder.size;
        this.toppings = builder.toppings;
        this.crust = builder.crust;
    }

    public describePizza(): string {
        return `Pizza Size: ${this.size}, Crust: ${this.crust}, Toppings: ${this.toppings.join(", ")}`;
    }
}

class PizzaBuilder {
    public size: string;
    public toppings: string[] = [];
    public crust: string;

    constructor(size: string) {
        this.size = size;
        this.crust = "Regular"; // Default crust
    }

    public addTopping(topping: string): PizzaBuilder {
        this.toppings.push(topping);
        return this;
    }

    public setCrust(crust: string): PizzaBuilder {
        this.crust = crust;
        return this;
    }

    public build(): Pizza {
        return new Pizza(this);
    }
}
