// 초기화
	var indicator = document.querySelectorAll('.indicator button');
	var lightbox = document.querySelector('#lightbox');
	var block = document.querySelector('#block'); // 라이트박스 배경
	var result = document.querySelector('.result button');

// 라이트 박스 표시
function lightbox_open(num){
	lightbox.setAttribute('class', 'active');
	block.setAttribute('class', 'active');
	
	change_img(num);
	indicator[num-1].focus();	
}

// 라이트 박스 닫기
function lightbox_close(){
	lightbox.removeAttribute('class');
	block.removeAttribute('class');
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
}

$('.fun-btn').on('click', function(event) {
	$(this).toggleClass('start-fun');
	var $page = $('.page');
	$page.toggleClass('color-bg-start')
	  .toggleClass('bg-animate-color');
  
	//change text when when button is clicked
  
	$(this).hasClass('start-fun') ?
	  $(this).text('stop the fun') :
	  $(this).text('start the fun');
  
  });