class DatabaseConnection {
    private static instance: DatabaseConnection;

    private constructor() {
        // Initialization code here (e.g., opening a database connection)
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    public query(sql: string) {
        console.log(`Executing query: ${sql}`);
        // SQL execution logic would go here
    }
}

// Usage
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // true, both references point to the same instance
