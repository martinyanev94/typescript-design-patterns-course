interface Command {
    execute(): void;
}

class Light {
    public turnOn(): void {
        console.log('The light is ON');
    }

    public turnOff(): void {
        console.log('The light is OFF');
    }
}

class TurnOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOn();
    }
}

class TurnOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOff();
    }
}

// Invoker
class RemoteControl {
    private command: Command;

    public setCommand(command: Command): void {
        this.command = command;
    }

    public pressButton(): void {
        this.command.execute();
    }
}

// Usage
const light = new Light();
const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton(); // Output: The light is ON

remote.setCommand(turnOff);
remote.pressButton(); // Output: The light is OFF
