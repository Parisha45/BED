let box = document.querySelector("#box");
let btn = document.querySelector("#btn")
let stop = document.querySelector("#stopbtn")
let colours=["red","black","green","yellow","brown","pink","blue","purple","orange","grey"]

function generateRandomColour(){
    let index = Math.floor(Math.random()*10);
    console.log(index);


    let randomcolor = colour[index];
    console.log(randomcolor)
    box.computedStyleMap.background = randomcolor

}
btn.addEventListener("click",function(){
    id = setInterval
    setInterval(()=>{
        generateRandomColour();

    },500)
})
stop.addEventListener("click",function(){
    if(id){
        clearInterval()

    }
})