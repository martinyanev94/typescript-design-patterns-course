import React from 'react';
import { useQuery } from 'react-query';
import { trpc } from './trpc';

const UserContext = React.createContext({ users: [], loading: false, error: null });

const UserProvider: React.FC = ({ children }) => {
    const { data, isLoading, error } = useQuery(['users'], () => trpc.fetchUsers());

    return (
        <UserContext.Provider value={{ users: data, loading: isLoading, error }}>
            {children}
        </UserContext.Provider>
    );
};
