const fs = require("fs");
console.log(fs);
console.log("start");

setImmediate(()=>{
    console.log("set Immediate")
})

setTimeout(()=>{
    console.log("settimeout")
},0)

fs.readfile("demo.txt",(data)=>{
    console.log("file read")
})

console.log("end");