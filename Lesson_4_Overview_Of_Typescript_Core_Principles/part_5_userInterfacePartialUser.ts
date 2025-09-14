interface User {
    username: string;
    password: string;
    email: string;
}

type PartialUser = {
    [P in keyof User]?: User[P];
};

const newUser: PartialUser = {
    username: 'explicitUser',
}
