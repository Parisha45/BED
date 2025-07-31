let todoInput = document.querySelector(".todoFTitle");
let todoForm = document.querySelector("#todoForm");
let todoContainer = document.querySelector(".todoContainer");

let todoArray = []
fetch("http://localhost:5555/todos")
.then((respose)=>response.json())
.then((data)=>{
    todoArray=data
    showAllTodos(todoArray)
})



todoForm.addEventListener("submit",function(e){
    e.preventDefault();
    let value = inputValue();
    let newTodo = {
        id:Math.floor(Math.random()*10000),
        title:value
    }
    todoArray.push(newTodo);
    showAllTodos(todoArray);
    



    addTodo(newTodo)
    todoInput.value = ""

})



function inputValue(){
    return todoInput.value
}
function addTodo(todo){
 let li = document.createElement("li");
    li.setAttribute("id",`${todo.id}`)
    li.innerHTML = `<div>
                <input type = "checkbox" name ="" id = "checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class = "edit">----</button>
                    <button class = "delete">❌</button>
                    <p> Hello there </p>
                </div>

            </div>`
    todoContainer.appendChild(li);

}
function showAllTodos(todosArray){
    todoContainer.innerHTML="";
    todoArray.forEach(todo=>{
        addTodo(todo)
    });
}