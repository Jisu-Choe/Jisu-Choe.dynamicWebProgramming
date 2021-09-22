// 초기화

let sound_btn = document.getElementById('sound_btn');
let textbox = document.querySelector("div > p");
let destiny = document.querySelectorAll('figure > img');
let thumb = document.getElementsByClassName('cards');
let h1 = document.querySelector("center > h1");
let showCard = document.querySelector("#show_card");
let container = document.getElementById('container');
let result_btn = document.querySelector('.result-btn');
let close_btn = document.querySelector('.close-btn');


// pick random card & cards fadeout & show chosen card
function rand_card(){
for(i=0;i<22;i++){
	thumb[i].removeAttribute('title');
	thumb[i].setAttribute('title', 'fadeOut');
}
setTimeout(function(){
	for(i=0;i<22;i++){
		thumb[i].style.display="none";
	}
	destiny[n].setAttribute('class', 'active');
	h1.innerHTML="당신이 선택한 카드는 ";
	h1.innerHTML += cardTitle[n];
	h1.innerHTML += " 입니다 <br/> 버튼을 클릭해 당신의 운세를 확인하세요";
	result_btn.style.display="inline";
	close_btn.style.display="inline";
},3000);
}

// cards fadein & class remove
function choose_again(){
showCard.removeAttribute('title');
destiny[n].removeAttribute('class');
n = Math.floor(Math.random()* 22);
for(i=0;i<22;i++){
	container.style.display="none"
}
for(i=0;i<22;i++){
	thumb[i].style.display="inline";
}
h1.innerHTML="마음 속 감정에 집중하면서<br/>신중하게 1장의 카드를 선택해 주세요 ";
for(i=0;i<22;i++){
	thumb[i].removeAttribute('title');
	thumb[i].setAttribute('title','fadeIn');
}
result_btn.style.display="none";
close_btn.style.display="none";

}
// show card & result txt
function show_result(n){
destiny[n].removeAttribute('class');
for(i=0;i<22;i++){
	container.style.display="block"
}
textbox.innerHTML=text[n];
result_btn.style.display="none";
close_btn.style.display="none";
}

// 오디오 객체
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

function flipSound(){
var flip = new Audio("images/cardsound.mp3");
flip.play();
}
