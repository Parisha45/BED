const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.get("/api/users", (req, res) => {
    const { name, email } = req.query;
    res.json({ name, email });
});

app.post("/api/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = {
        id: Math.floor(Math.random() * 1000),
        name,
        email
    };

    res.status(201).json({ user: newUser });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});