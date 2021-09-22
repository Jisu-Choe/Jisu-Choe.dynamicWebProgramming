var tarot = document.querySelector("#tarot");
var horoscope = document.querySelector("#horoscope");
var game = document.querySelector("#game");
var currentText=1;

function leftText(){ 
    if(currentText==1){
        tarot.style.display = "none";
        game.style.display = "block";
        currentText = 3;
    }
    else if(currentText==2){
        horoscope.style.display = "none";
        tarot.style.display = "block";
        currentText = 1;
    }
    else if(currentText==3){
        game.style.display = "none";
        horoscope.style.display = "block";
        currentText = 2;
    }
    else{
        tarot.style.display= 1;
        horoscope.style.display = "none";
        game.style.display = "block";
    }
}

function rightText(){
    if(currentText==1){
        tarot.style.display = "none";
        horoscope.style.display = "block";
        currentText = 2;
    }
    else if(currentText==2){
        currentText = 3;
        horoscope.style.display = "none";
        game.style.display = "block";
    }
    else if(currentText==3){
        game.style.display = "none";
        tarot.style.display = "block";
        currentText = 1;
    }
    else{
        tarot.style.display= 1;
        horoscope.style.display = "none";
        game.style.display = "none";
    }
}
function harpSound(){
    var harp = new Audio("images/harp.mp3");
    harp.play();
    }