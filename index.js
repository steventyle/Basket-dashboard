let scoreH = document.getElementById("scoreH")
let scoreG = document.getElementById("scoreG")
let foulsH = document.getElementById("n-foulsH")
let foulsG = document.getElementById("n-foulsG")
let countScoreH = 0
let countFoulsH = 0
let countScoreG = 0
let countFoulsG = 0



function plus1H(){
    countScoreH += 1
    scoreH.textContent = countScoreH
}
function plus2H(){
    countScoreH += 2
    scoreH.textContent = countScoreH
}
function plus3H(){
    countScoreH += 3
    scoreH.textContent = countScoreH
}

function plusFoulsH(){
    countFoulsH += 1
    foulsH.textContent = countFoulsH
}
function minusFoulsH(){
    countFoulsH -= 1
    foulsH.textContent = countFoulsH
}





function plus1G(){
    countScoreG += 1
    scoreG.textContent = countScoreG
}
function plus2G(){
    countScoreG += 2
    scoreG.textContent = countScoreG
}
function plus3G(){
    countScoreG += 3
    scoreG.textContent = countScoreG
}

function plusFoulsG(){
    countFoulsG += 1
    foulsG.textContent = countFoulsG
}
function minusFoulsG(){
    countFoulsG -= 1
    foulsG.textContent = countFoulsG
}

//Evidenziare risultato + alto!!!!

if (countScoreH > countScoreG){
    document.getElementById("scoreH").style.background = "rgb(255, 251, 0)"
    document.getElementById("scoreG").style.background = "#000"
} 
if (countScoreG > countScoreH){
    document.getElementById("scoreG").style.background = "rgb(255, 251, 0)"
    document.getElementById("scoreH").style.background = "#000"
}

//------------------------------------------

let seconds = document.getElementById("seconds")
let minutes = document.getElementById("minutes")
let hours = document.getElementById("hours")
let second = 0
let minute = 0
let hour = 0

function startTime(){
    while (second <= 60) {
        window.setTimeout(second += 1, 1000)
    }
}

//-----------------------------------------

function newGame(){
    countFoulsG = 0
    countFoulsH = 0
    countScoreH = 0
    countScoreG = 0
    scoreG.textContent = 0
    scoreH.textContent = 0
    foulsH.textContent = 0
    foulsG.textContent = 0
}