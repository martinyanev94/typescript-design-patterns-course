interface State {
    handle(): void;
}

class Context {
    private state: State;

    constructor(initialState: State) {
        this.state = initialState;
    }

    public request(): void {
        this.state.handle();
    }

    public changeState(newState: State): void {
        this.state = newState;
    }
}

class ConcreteStateA implements State {
    public handle(): void {
        console.log("Handling request in ConcreteStateA");
    }
}

class ConcreteStateB implements State {
    public handle(): void {
        console.log("Handling request in ConcreteStateB");
    }
}

// Client code
const context = new Context(new ConcreteStateA());
context.request();  // Output: Handling request in ConcreteStateA
context.changeState(new ConcreteStateB());
context.request();  // Output: Handling request in ConcreteStateB
