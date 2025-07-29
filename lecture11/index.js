let res = document.getElementById("mydiv");
//console.log(res)
console.dir(res);

let h2 = document.getElementsByClassName("h2");
console.log(h2)
console.log(h2[0])

let res2 = document.getElementsByTagName("p");
console.log(res2);

let out = document.querySelector(".mydiv");
document.querySelectorAll("p")
console.log(out)

console.log(res.innerHTML); //gettter
res.innerHTML = `<p>change using dom manipulation</p>` 
console.log(res.innerText)
res.innerText = `hello world`

console.log(res.getAttribute("id"))
let btn = document.querySelector(".btn")
btn.addEventListener("click",()=>{
    res.setAttribute("class","js")
})


let myH = document.querySelector(".myh");
console.log(myH.classList);
myH.classList.add("hi");
myH.classList.remove("myH");
btn.addEventListener("click",()=>{
    //myH.classList.toggle("jia ho")
    form.classList.toggle("hide")

})
