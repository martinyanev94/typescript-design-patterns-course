class Bird {
    fly(): void {
        console.log("Flying high!");
    }
}

class Eagle extends Bird {}

class Penguin extends Bird {
    fly(): void {
        throw new Error("Penguins can't fly!");
    }
}
interface Flyable {
    fly(): void;
}

class Eagle implements Flyable {
    fly(): void {
        console.log("Flying high!");
    }
}

class Penguin {}
