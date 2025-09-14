interface UserProfile {
    name: string;
    email: string;
    age: number;
    bio?: string;
}

function updateUserProfile(profile: Partial<UserProfile>) {
    console.log('Updating user profile:', profile);
}

// We can call this function with just the name or email
updateUserProfile({ name: 'Alice' });
updateUserProfile({ email: 'alice@example.com', bio: 'Hello!' });
