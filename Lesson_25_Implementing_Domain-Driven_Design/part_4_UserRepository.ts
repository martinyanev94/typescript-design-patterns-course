class UserRepository {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    findUserById(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }
}
