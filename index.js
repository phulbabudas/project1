const express = require('express');
const userRoutes = require("./routes")
const db = require("./db")
const app = express();

app.use(express.json());

db()


app.use("/api", userRoutes)
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});