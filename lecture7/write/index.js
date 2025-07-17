const fs = require("fs")
let users=[
    {
        id:1,
        name:"Parisha",
        age:"20"
    },
    {
        id:2,
        name: "Ritik",
        age : "25"
    },
]
fs.writeFile("../users2.txt", JSON.stringify(users), function(err) {
    if (err) return console.log(err);
    console.log("user written");
});