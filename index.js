const icone = document.getElementById("icone");
const coffee = document.getElementById("coffee");
const kuruKuru = document.getElementById("KuruKuru");

let boom = new Audio("Audios/VineBoom.mp3");
let coffeeAudio = new Audio("Audios/RobloxSFX.mp3");
let kuruAudio = new Audio("Audios/KURU KURU.mp3");

//Audios

function boomFun(){
    var clone = boom.cloneNode();
    clone.play();
}

function coffeeFun(){
    var clone = coffeeAudio.cloneNode();
    clone.play();
}

function kuruFun(){
    var clone = kuruAudio.cloneNode();
    clone.play();
}

icone.onclick = function(){
    boomFun();
}

coffee.onclick = function(){
    coffeeFun();
}

kuruKuru.onclick = function(){
    kuruFun();
}