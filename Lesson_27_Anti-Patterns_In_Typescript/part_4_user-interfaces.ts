interface User {
    name: string;
    age: number;
    email: string;
}

const user: User = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
};
interface BasicUser {
    name: string;
    age: number;
}

interface AdminUser extends BasicUser {
    email: string;
    permissions: string[];
}

const admin: AdminUser = {
    name: "Admin",
    age: 30,
    email: "admin@example.com",
    permissions: ["read", "write"],
};
