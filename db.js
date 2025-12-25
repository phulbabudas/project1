const postgres = require("postgres");

const sql = postgres({}); // will use psql environment variables
console.log("db connected");

module.exports = sql;
