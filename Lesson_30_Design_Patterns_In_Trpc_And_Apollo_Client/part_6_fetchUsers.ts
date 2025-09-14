const fetchUsers = async () => {
    try {
        const { data } = await client.query({
            query: GET_USERS,
        });
        return data.users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Could not fetch users, please try again later.');
    }
};
