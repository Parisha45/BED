let edit = document.querySelector(".edit")
let del = document.querySelector("delete")

console.dir(edit.nextElementSibling)
console.dir(edit.previousElementSibling)
console.dir(edit.nextElementSibling.nextElementSibling.innerText)

console.log(edit.parentElement.previousElementSibling)
let id = del.parentElement.parentElement.getAttribute("id")
console.log(id);