class DatabaseConnection {
    private static instance: DatabaseConnection;

    private constructor() {
        // Initialize connection, e.g., to a database
        console.log('Database connection established.');
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
}

// Usage
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log(db1 === db2); // Outputs: true
