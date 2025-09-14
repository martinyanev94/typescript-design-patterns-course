class Application {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    public run() {
        this.logger.log("Application is starting.");
    }
}

// Now in our setup code
const loggerInstance = Logger.getInstance();
const app = new Application(loggerInstance);
app.run();
