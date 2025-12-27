const express = require('express');
const userRoutes = require("./routes")
const app = express();

app.use(express.json());

app.use("/api", userRoutes)
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});