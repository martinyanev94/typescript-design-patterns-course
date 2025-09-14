interface UserProfile {
    name: string;
    email: string;
    password: string;
    bio?: string;
}

type LimitedUserProfile = Omit<UserProfile, 'password' | 'bio'>;

function sendUserProfile(profile: LimitedUserProfile) {
    console.log('Sending user profile without sensitive data:', profile);
}

const userProfile: LimitedUserProfile = {
    name: 'Daisy',
    email: 'daisy@example.com'
};

sendUserProfile(userProfile);
