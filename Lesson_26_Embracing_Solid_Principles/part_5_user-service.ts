interface UserRepository {
    getUserById(id: string): User;
}

class DatabaseUserRepository implements UserRepository {
    getUserById(id: string): User {
        // Retrieve user from the database
        return new User('Sample User', 'sample@example.com');
    }
}

class UserService {
    constructor(private userRepository: UserRepository) {}

    fetchUser(id: string): User {
        return this.userRepository.getUserById(id);
    }
}
