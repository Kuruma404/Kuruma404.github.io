const icone = document.getElementById("icone");
const coffee = document.getElementById("coffee");

let boom = new Audio("Audios/VineBoom.mp3");
let coffeeAudio = new Audio("Audios/RobloxSFX.mp3");

//Audios

function boomFun(){
    var clone = boom.cloneNode();
    clone.play();
}

function coffeeFun(){
    var clone = coffeeAudio.cloneNode();
    clone.play();
}


icone.onclick = function(){
    boomFun();
}

coffee.onclick = function(){
    coffeeFun();
}