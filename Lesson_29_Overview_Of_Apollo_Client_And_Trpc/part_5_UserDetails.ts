import { trpc } from './utils/trpc';

const User: React.FC<{ userId: string }> = ({ userId }) => {
    const userQuery = trpc.useQuery(['getUser', userId]);

    if (userQuery.isLoading) return <p>Loading...</p>;
    if (userQuery.error) return <p>Error: {userQuery.error.message}</p>;

    return (
        <div>
            <h2>{userQuery.data.name}</h2>
            <p>{userQuery.data.email}</p>
        </div>
    );
};
