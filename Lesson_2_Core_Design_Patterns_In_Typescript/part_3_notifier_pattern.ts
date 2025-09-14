interface Notifier {
    send(message: string): void;
}

class EmailNotifier implements Notifier {
    send(message: string): void {
        console.log(`Email sent: ${message}`);
    }
}

class SMSNotifier implements Notifier {
    send(message: string): void {
        console.log(`SMS sent: ${message}`);
    }
}

class NotifierDecorator implements Notifier {
    protected notifier: Notifier;

    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }

    send(message: string): void {
        this.notifier.send(message);
    }
}

class LoggingDecorator extends NotifierDecorator {
    send(message: string): void {
        console.log(`Logging: ${message}`);
        super.send(message);
    }
}

// Usage
let notifier: Notifier = new EmailNotifier();
notifier = new LoggingDecorator(notifier);

notifier.send("Hello, World!"); // Outputs: Logging: Hello, World! and Email sent: Hello, World!
