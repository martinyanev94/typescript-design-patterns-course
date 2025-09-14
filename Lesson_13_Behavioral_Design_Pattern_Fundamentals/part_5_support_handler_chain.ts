abstract class SupportHandler {
    protected nextHandler: SupportHandler | null = null;

    setNext(handler: SupportHandler): SupportHandler {
        this.nextHandler = handler;
        return handler;
    }

    handleRequest(issue: string): void {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(issue);
        }
    }
}

class JuniorSupport extends SupportHandler {
    handleRequest(issue: string): void {
        if (issue === "basic") {
            console.log("Junior Support: I can handle this basic issue.");
        } else {
            super.handleRequest(issue);
        }
    }
}

class SeniorSupport extends SupportHandler {
    handleRequest(issue: string): void {
        if (issue === "advanced") {
            console.log("Senior Support: I can handle this advanced issue.");
        } else {
            super.handleRequest(issue);
        }
    }
}

class ManagerSupport extends SupportHandler {
    handleRequest(issue: string): void {
        console.log("Manager Support: I will handle the issue.");
    }
}

// Usage
const junior = new JuniorSupport();
const senior = new SeniorSupport();
const manager = new ManagerSupport();

junior.setNext(senior).setNext(manager);

junior.handleRequest("basic"); // Handled by Junior Support
junior.handleRequest("advanced"); // Handled by Senior Support
junior.handleRequest("complex"); // Handled by Manager Support
