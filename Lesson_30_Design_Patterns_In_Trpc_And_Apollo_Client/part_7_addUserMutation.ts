const addUser = async (newUser: User) => {
    await client.mutate({
        mutation: ADD_USER,
        variables: { user: newUser },
        update: (cache) => {
            const existingUsers: any = cache.readQuery({ query: GET_USERS });
            cache.writeQuery({
                query: GET_USERS,
                data: { users: [...existingUsers.users, newUser] },
            });
        },
    });
};
