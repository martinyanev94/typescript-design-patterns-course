interface MovementStrategy {
    move(): void;
}

class Walk implements MovementStrategy {
    move(): void {
        console.log("Walking...");
    }
}

class Run implements MovementStrategy {
    move(): void {
        console.log("Running...");
    }
}

class Fly implements MovementStrategy {
    move(): void {
        console.log("Flying...");
    }
}
class Character {
    private movementStrategy: MovementStrategy;

    setMovementStrategy(strategy: MovementStrategy): void {
        this.movementStrategy = strategy;
    }

    moveCharacter(): void {
        this.movementStrategy.move();
    }
}
