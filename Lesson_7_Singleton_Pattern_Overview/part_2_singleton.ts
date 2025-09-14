class Singleton {
    private static instance: Singleton;

    private constructor() {
        // Initialization code
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public sayHello(): void {
        console.log("Hello from Singleton!");
    }
}
