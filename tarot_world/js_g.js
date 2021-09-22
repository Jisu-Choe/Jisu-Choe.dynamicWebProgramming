// Main Game Play
let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];
let imgElements = document.getElementsByClassName('game-card-img');
let imgElementsArray = [...imgElements];
let counter = document.getElementById('moveCounter');
let modalsucessElement = document.getElementById('gameOverModal');
let modalfailElement = document.getElementById('gameFailModal');
let closesucessModalIcon = document.getElementById('closesucessModal');
let closefailModalIcon = document.getElementById('closefailModal');
let start_btn = document.querySelector('.start-btn');
let openedCards = [];
let matchedCards =  [];
let moves;
let interval,
    totalGameTime,
    starRating;

function begingame(){
    start_btn.style.display = "none";
    startGame();    
}
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];                                                                                                                   
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function startGame() {
    //shuffle cards
    let shuffledImages = shuffle(imgElementsArray);


    for(i=0; i<shuffledImages.length; i++) {
        //remove all images from previous games from each card (if any)
        cardElements[i].innerHTML = "";

        //add the shuffled images to each card
        cardElements[i].appendChild(shuffledImages[i]);
        cardElements[i].type = `${shuffledImages[i].alt}`;

        //remove all extra classes for game play
        cardElements[i].classList.remove("show", "open", "match", "disabled");
        cardElements[i].children[0].classList.remove("show-img");
    }

    //listen for events on the cards
    for(let i = 0; i < cardElementsArray.length; i++) {
        cardElementsArray[i].addEventListener("click", displayCard)
    }

    //when game starts show all the cards for a split second
    flashCards();

    //reset moves
    moves = 20;
    counter.innerText = `남은 횟수 : ${moves} 회`;

}

function flashCards() {
    for(i=0; i<cardElements.length; i++) {
        cardElements[i].children[0].classList.add("show-img")
    }
    setTimeout(function(){
        for(i=0; i<cardElements.length; i++) {
            cardElements[i].children[0].classList.remove("show-img")
        }
    }, 3000)
}

function displayCard() {
    this.children[0].classList.toggle('show-img');
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    cardOpen(this);
}

function cardOpen(card) {
    openedCards.push(card);
    let len = openedCards.length;
    if(len === 2) {
        moveCounter();
        if(openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
}

function matched() {
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    matchedCards.push(openedCards[0]);
    matchedCards.push(openedCards[1]);
    openedCards = [];
    if(matchedCards.length == 16) {
        endGame();
    }
}

function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        openedCards[0].children[0].classList.remove('show-img');
        openedCards[1].children[0].classList.remove('show-img');
        enable();
        openedCards = [];
        
    }, 1100)
}

function disable() {
    cardElementsArray.filter((card, i, cardElementsArray) => {
        card.classList.add('disabled');
    })
}

function enable() {
    cardElementsArray.filter((card, i, cardElementsArray) => {
        card.classList.remove('disabled');
        for(let i=0; i<matchedCards.length; i++) {
            matchedCards[i].classList.add('disabled');
        }
    })
}

function moveCounter() {
    moves--;
    counter.innerHTML = `남은 횟수: ${moves} 회`;
    if(moves==0){
        failGame();
    };
}

function failGame() {
    clearInterval(interval);
    //show modal on game end
    modalfailElement.classList.add("show-failmodal");
    matchedCards = [];
    closefailModal();
}

function closefailModal() {
    closefailModalIcon.addEventListener("click", function() {
        modalfailElement.classList.remove("show-failmodal");
        startGame();
    })
}

function endGame() {
    clearInterval(interval);
    //show modal on game end
    modalsucessElement.classList.add("show-sucessmodal");
    matchedCards = [];
    closesucessModal();
}

function closesucessModal() {
    closesucessModalIcon.addEventListener("click", function() {
        modalsucessElement.classList.remove("show-sucessmodal");
        startGame();
    })
}

function playAgains() {
    modalsucessElement.classList.remove("show-sucessmodal");
    startGame();
}

function playAgainf() {
    modalfailElement.classList.remove("show-failmodal");
    startGame();
}

// wait for some milliseconds before game starts
//window.onload = function () {
//    setTimeout(function() {
//        startGame()
//    }, 1200);
//}
function bgm_init() {
	var bgm = new Audio();
  	bgm.src = 'images/bgm.mp3';
  	bgm.loop = true;
  	document.body.appendChild(bgm);
  }
  bgm_init();

// 사운드 버튼 이벤트 핸들러
sound_btn.onclick = function(event){
	var attr = sound_btn.getAttribute('class');			// 사운드버튼의 class 속성
	var bgm = document.getElementsByTagName('audio');	// audio 객체

	if(attr == 'active'){
		// 사운드 off
		sound_btn.removeAttribute('class');
		sound_btn.setAttribute('src', 'images/sound_off.png');	// 버튼 이미지 교체
		bgm[0].pause();
	} else{
		// 사운드 on
		sound_btn.setAttribute('class', 'active');
		sound_btn.setAttribute('src', 'images/sound_on.png');
		bgm[0].play();
	}
	event.stopPropagation();
}