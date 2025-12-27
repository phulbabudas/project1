const postgres = require("postgres");

const sql = postgres({
    host: "127.0.0.1",
    port: 5433,
    database: "postgres",
    user: "postgres",
    password: "phul@123",
    onnotice: () => {}, // Suppress notices
});

// Test the connection
sql`SELECT 1`
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log(err);
        console.error("Database connection error:", err.message);
        console.error("Please ensure PostgreSQL is running and connection details are correct.");
    });

module.exports = sql;
