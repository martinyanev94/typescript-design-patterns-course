class User implements Prototype {
    constructor(private name: string, private permissions: string[]) {}

    public clone(): Prototype {
        return new User(this.name, [...this.permissions]); // Making a deep copy of permissions
    }

    public getName(): string {
        return this.name;
    }

    public getPermissions(): string[] {
        return this.permissions;
    }
}
