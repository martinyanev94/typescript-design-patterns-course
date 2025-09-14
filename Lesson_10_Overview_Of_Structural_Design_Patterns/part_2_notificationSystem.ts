interface Notifier {
    send(message: string): void;
}

class BasicNotifier implements Notifier {
    send(message: string): void {
        console.log(`Sending message: ${message}`);
    }
}

abstract class NotifierDecorator implements Notifier {
    protected wrappedNotifier: Notifier;

    constructor(notifier: Notifier) {
        this.wrappedNotifier = notifier;
    }

    abstract send(message: string): void;
}

class EmailNotifier extends NotifierDecorator {
    send(message: string): void {
        this.wrappedNotifier.send(message); // Send via basic notifier
        console.log(`Sending Email notification for: ${message}`);
    }
}

class SMSNotifier extends NotifierDecorator {
    send(message: string): void {
        this.wrappedNotifier.send(message); // Send via basic notifier
        console.log(`Sending SMS notification for: ${message}`);
    }
}

let notifier = new BasicNotifier();
notifier = new EmailNotifier(notifier);
notifier = new SMSNotifier(notifier);

notifier.send("You've got a new message!");
