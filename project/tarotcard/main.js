// 초기화
	var lightbox = document.querySelector('#lightbox');
	var block = document.querySelector('#block'); // 라이트박스 배경
	var result = document.getElementsByClassName('result-btn');
	var sound_btn = document.getElementById('sound_btn');
	var h1 = document.getElementsByTagName('h1');
	var thumb = document.getElementsByClassName('thumb');


// 라이트 박스 표시
function lightbox_open(num){
	lightbox.setAttribute('class', 'active');
	block.setAttribute('class', 'active');
	
	change_img(num);
}
function lightbox_close(){
	lightbox.removeAttribute('class');
	block.removeAttribute('class');
}
function show_result(){

}

// 이미지 전환 표시 함수
function change_img(val){
  var imgs = document.querySelectorAll('figure > img');

  for( var i=0; i< imgs.length; i++){
    imgs[i].removeAttribute('class');
  }
  imgs[val-1].setAttribute('class', 'active');
}	

// pick random card
function rand_card(n){
	var destiny = document.querySelectorAll('figure > img');
	lightbox.setAttribute('class', 'active');
	destiny[n].setAttribute('class', 'active');
	block.setAttribute('class', 'active');
	h1.innerHTML = "";
	thumb.setAttribute('class', 'active');
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