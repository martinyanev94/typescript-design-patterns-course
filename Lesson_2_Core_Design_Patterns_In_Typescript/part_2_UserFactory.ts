interface User {
    name: string;
    role: string;
}

class Admin implements User {
    name: string;
    role = "Admin";
    constructor(name: string) {
        this.name = name;
    }
}

class Guest implements User {
    name: string;
    role = "Guest";
    constructor(name: string) {
        this.name = name;
    }
}

class UserFactory {
    static createUser(type: string, name: string): User {
        switch (type) {
            case "admin":
                return new Admin(name);
            case "guest":
                return new Guest(name);
            default:
                throw new Error("Invalid user type");
        }
    }
}

// Usage
const user1 = UserFactory.createUser("admin", "Alice");
const user2 = UserFactory.createUser("guest", "Bob");

console.log(user1); // Outputs: Admin { name: 'Alice', role: 'Admin' }
console.log(user2); // Outputs: Guest { name: 'Bob', role: 'Guest' }
