function startGame(){

let name=document.getElementById("playerName").value

if(name===""){
alert("Enter your name")
return
}

document.getElementById("startScreen").classList.add("hidden")
document.getElementById("descScreen").classList.remove("hidden")

}

function startLevel1(){

alert("Game will start here")

}
