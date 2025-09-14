interface UserProfile {
    name: string;
    email: string;
    age?: number; // This field is optional
}

type CompleteProfile = Required<UserProfile>;

function displayProfile(profile: CompleteProfile) {
    console.log(`Name: ${profile.name}, Email: ${profile.email}, Age: ${profile.age}`);
}

const validProfile: CompleteProfile = {
    name: 'Bob',
    email: 'bob@example.com',
    age: 30 // Now this is required
};

displayProfile(validProfile);
