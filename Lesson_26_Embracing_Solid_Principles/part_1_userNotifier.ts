class User {
    constructor(public name: string, public email: string) {}
}

class UserNotifier {
    sendWelcomeEmail(user: User): void {
        console.log(`Welcome email sent to ${user.email}`);
    }
}
