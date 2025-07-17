const fs = require("fs").promises;

async function readusers() {
    try {
        let usersData = await fs.readFile("../users.txt", "utf-8");
        let users2Data = await fs.readFile("../users2.txt", "utf-8");

        let users = JSON.parse(usersData);
        let users2 = JSON.parse(users2Data);

        console.log(users);
        console.log(users2);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

readusers();
