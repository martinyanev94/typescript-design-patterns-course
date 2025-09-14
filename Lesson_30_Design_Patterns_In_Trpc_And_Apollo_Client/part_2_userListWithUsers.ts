import React from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

const GET_USERS = gql`
    query GetUsers {
        users {
            id
            name
            email
        }
    }
`;

const withUsers = (Component: React.ComponentType<any>) => {
    return (props: any) => {
        return (
            <Component {...props} />
        );
    };
};

const UserListWithUsers = graphql(GET_USERS)(withUsers(UserList));
