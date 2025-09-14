class Character {
    private name: string;
    private health: number;
    private strength: number;
    private armor: number;

    constructor(builder: CharacterBuilder) {
        this.name = builder.name;
        this.health = builder.health;
        this.strength = builder.strength;
        this.armor = builder.armor;
    }

    public describeCharacter(): string {
        return `${this.name} - Health: ${this.health}, Strength: ${this.strength}, Armor: ${this.armor}`;
    }
}

class CharacterBuilder {
    public name: string;
    public health: number;
    public strength: number;
    public armor: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100; // setting default
        this.strength = 10; // setting default
        this.armor = 5; // setting default
    }

    public setHealth(health: number): CharacterBuilder {
        this.health = health;
        return this;
    }

    public setStrength(strength: number): CharacterBuilder {
        this.strength = strength;
        return this;
    }

    public setArmor(armor: number): CharacterBuilder {
        this.armor = armor;
        return this;
    }

    public build(): Character {
        return new Character(this);
    }
}
