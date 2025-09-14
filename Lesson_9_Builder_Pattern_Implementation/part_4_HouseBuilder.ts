class House {
    private rooms: number;
    private garden: boolean;
    private garage: boolean;

    constructor(builder: HouseBuilder) {
        this.rooms = builder.rooms;
        this.garden = builder.garden;
        this.garage = builder.garage;
    }

    public describeHouse(): string {
        return `House with ${this.rooms} rooms, ` +
               `Garden: ${this.garden ? "Yes" : "No"}, ` +
               `Garage: ${this.garage ? "Yes" : "No"}`;
    }
}

class HouseBuilder {
    public rooms: number;
    public garden: boolean = false; // Default is no garden
    public garage: boolean = false; // Default is no garage

    constructor(rooms: number) {
        this.rooms = rooms;
    }

    public addGarden(): HouseBuilder {
        this.garden = true;
        return this;
    }

    public addGarage(): HouseBuilder {
        this.garage = true;
        return this;
    }

    public build(): House {
        return new House(this);
    }
}
