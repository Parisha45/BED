let nody = document.querySelector("body");

body.addEventListner("click",function(ev){
    console.log(ev.target.innerText);
    console.log(ev.target)

})