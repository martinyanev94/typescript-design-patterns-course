interface UserProfile {
    name: string;
    email: string;
    password: string;
    age: number;
}

type UserLogin = Pick<UserProfile, 'email' | 'password'>;

function login(user: UserLogin) {
    console.log(`Logging in with: ${user.email}`);
}

const userLoginDetails: UserLogin = {
    email: 'charlie@example.com',
    password: 'securePassword123'
};

login(userLoginDetails);
