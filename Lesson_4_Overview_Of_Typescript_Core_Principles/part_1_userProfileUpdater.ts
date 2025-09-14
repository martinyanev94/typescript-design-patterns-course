interface UserProfile {
    name: string;
    email: string;
    age: number;
    bio?: string;
}

function updateUserProfile(profile: Partial<UserProfile>) {
    // Function logic to update user profile
    console.log('Updating user profile:', profile);
}

// Calling with different levels of data completeness
updateUserProfile({ name: 'Alice' });
updateUserProfile({ email: 'alice@example.com', bio: 'Hello!' });
