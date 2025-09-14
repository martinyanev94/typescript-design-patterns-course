interface User {
    username: string;
    password: string;
    email: string;
}

type OptionalUser = {
    [K in keyof User]?: User[K];
};

const newUser: OptionalUser = {
    username: 'explicitUser',
}
