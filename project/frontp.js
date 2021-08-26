var tarot = document.querySelector("#tarot");
var horoscope = document.querySelector("#horoscope");
var game = document.querySelector("#game");
var currentText=1;

function leftText(){
    var tarot = document.querySelector("#tarot");
    var horoscope = document.querySelector("#horoscope");
    var game = document.querySelector("#game");
    
    alert(currentText)
    if(currentText==1){
        tarot.style.opacity = 0;
        game.style.opacity = 1;
        currentText = 3;
    }
    else if(currentText==2){
        horoscope.style.opacity = 0;
        tarot.style.opacity = 1;
        currentText = 1;
    }
    else if(currentText==3){
        game.style.opacity = 0;
        horoscope.style.opacity = 1;
        currentText = 2;
    }
    else{
        tarot.style.opacity= 1;
        horoscope.style.opacity = 0;
        game.style.opacity = 0;
    }
}

function rightText(){
    alert(currentText);
    if(currentText==1){
        tarot.style.opacity = 0;
        horoscope.style.opacity = 1;
        currentText = 2;
    }
    else if(currentText==2){
        currentText = 3;
        horoscope.style.opacity = 0;
        game.style.opacity = 1;
    }
    else if(currentText==3){
        game.style.opacity = 0;
        tarot.style.opacity = 1;
        currentText = 1;
    }
    else{
        tarot.style.opacity= 1;
        horoscope.style.opacity = 0;
        game.style.opacity = 0;
    }
}