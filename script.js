'use strict'
var randomNumber = null;
var different = -1;
var contenedorScore ="";
var elementScore = document.getElementById('score');
var elementReset = document.getElementById('reset');
var score = 0;
var reset = 0;
var selector = null;
var verificar = []
var ocultar = document.getElementById('mostrar');
verificar = document.getElementsByClassName('btn');
var element = document.getElementsByClassName ('btn');
var auxiliarSelector = element[0].style.backgroundColor = 'transparent';
console.log(typeof(auxiliarSelector));

var startcount = 0;
console.log(element[0].addEventListener("click", setColor(),false));

function start(valido) {
    console.log(valido);
    if(startcount>=1){

        reset++;
        score = 0;
        elementScore = 0;
        elementReset.innerHTML = reset
    }
    setColor(undefined,valido);
    ocultar.style.display = "none";
    console.log(ocultar);
    startcount++;

}

function setColor(numID,start) {
    do {
        randomNumber = Math.random() * 15;
        randomNumber -= randomNumber% 1;
    } while (randomNumber == different);
        
        console.log(randomNumber,numID, start, auxiliarSelector);
        /* SELECCIONA UN BOTON RANDOM PARA COLOREAR */
        selector = document.querySelector("#"+ element[randomNumber].id)
        console.log(selector);
            if(start == true){
                console.log(selector);
                selector.style.backgroundColor = 'blue';
                different = randomNumber;
                auxiliarSelector = selector;
                score++
                
            }else if (auxiliarSelector.id == numID){
                auxiliarSelector.style.backgroundColor = "transparent";
                auxiliarSelector = selector
                selector.style.backgroundColor = 'blue';
                different = randomNumber;
                elementScore.innerHTML=score++;
            }
            else if (auxiliarSelector.id != numID){
                startcount = 0;
                auxiliarSelector.style.backgroundColor = "transparent";
                auxiliarSelector.style.cursor = "pointer";
                ocultar.style.display = "block";
                ocultar.innerHTML = "YOU LOOSE, YOUR SCORE WAS: "+ (score - 1);
                ocultar.append(textnode)
            }
           // else if(auxiliarSelector.style.backgroundColor === 'blue'){
    

}

function reloadPage() {
    location.reload()
}
function validClick() {
    while (verificar.lenght > 0){
        if(verificar[0].class == 'actual'){
        console.log(verificar[0]);
        verificar.pop();

    }else{
        console.log("albano puto");
    }

    
    if (verificar.addlist.contains('actual')){
        contenedorScore = document.getElementById('score');
        contenedorScore.innerHTML = score++;
        console.log(contenedorScore);
        }else{
        selector.style.backgroundColor = 'red';
        selector.classList.remove('actual');
        score = 0;
        reset++;
    }
}}