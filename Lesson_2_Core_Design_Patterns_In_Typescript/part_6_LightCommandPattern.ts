interface Command {
    execute(): void;
}

class Light {
    turnOn(): void {
        console.log("Light is ON");
    }

    turnOff(): void {
        console.log("Light is OFF");
    }
}

class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOff();
    }
}

// Usage
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

lightOn.execute(); // Outputs: Light is ON
lightOff.execute(); // Outputs: Light is OFF
