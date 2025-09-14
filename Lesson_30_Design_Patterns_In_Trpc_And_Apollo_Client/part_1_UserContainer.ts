import React from 'react';
import { gql, useQuery } from '@apollo/client';
import UserList from './UserList';

const GET_USERS = gql`
    query GetUsers {
        users {
            id
            name
            email
        }
    }
`;

const UserContainer: React.FC = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <UserList users={data.users} />;
};
