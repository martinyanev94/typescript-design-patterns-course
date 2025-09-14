class User {
    constructor(public name: string, public age: number) {}

    updateAge(newAge: number) {
        this.age = newAge;
    }

    sendEmail() {
        // Logic for sending email to the user
    }

    logUserInfo() {
        console.log(`${this.name}, ${this.age}`);
    }

    // ... More unrelated methods
}
class User {
    constructor(public name: string, public age: number) {}

    updateAge(newAge: number) {
        this.age = newAge;
    }

    logUserInfo() {
        console.log(`${this.name}, ${this.age}`);
    }
}

class EmailService {
    sendEmail(user: User) {
        // Logic for sending email to the user
    }
}
