interface User {
    id: string;
    name: string;
    email: string;
}

class UserService {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public getUser(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }
}

const userService = new UserService();
userService.addUser({ id: 'C001', name: 'Alice', email: 'alice@example.com' });
const user = userService.getUser('C001');
console.log(user); // Outputs: { id: 'C001', name: 'Alice', email: 'alice@example.com' }
