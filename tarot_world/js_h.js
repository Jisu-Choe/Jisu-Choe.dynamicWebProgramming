var sound_btn = document.getElementById('sound_btn');
var textbox = document.querySelector("div > p");
var figure = document.getElementsByTagName('figure');
var h1 = document.querySelector("center > h1");
var container = document.getElementById('container');
var btn = document.querySelector('#again');

// pick random card & cards fadeout & show chosen card
function rand_card(t){

	for(i=0;i<12;i++){
		figure[i].removeAttribute('title');
		figure[i].setAttribute('title', 'fadeOut');
	}
	setTimeout(function(){
		for(i=0;i<12;i++){
			figure[i].style.display="none";
		}
		h1.innerHTML="이번주 당신의 운세는... ";
        container.style.display="block"
	},3000);
	var n = t.id;
	textbox.innerHTML=text[n];
}

function choose_again(){
	container.style.display="none";
	for(i=0;i<12;i++){
		figure[i].style.display="inline-block";
	}
	for(i=0;i<12;i++){
		figure[i].removeAttribute('title');
		figure[i].setAttribute('title', 'fadeIn');
	}
	h1.innerHTML="별들에게 물어봐!<br/>별자리를 선택해 당신의 운세를 알아보세요";
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