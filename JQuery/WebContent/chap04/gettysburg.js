$(function() {
	$('div.label').click(function() {	//div태그의 lable클래스 클릭했을때
		var pWidth = $('div.speech p').outerWidth();	//div태그의 speech클래스의 자식 p태그의 길이
		var divWidth = $('#switcher').outerWidth();		//id switcher의 길이
		
		var num = parseInt(pWidth) - parseInt(divWidth);
		
		$('#switcher')
			.fadeTo('fast', 0.5)	//id switcher박스에 빠르게 0.5의 투명도
			.animate({marginLeft: num}, 'slow')		//marginLeft값이 num이 될때까지 느리게
			.fadeTo('fast', 1.0)	//투명도 원래대로
			.slideUp('slow', function() {
				$(this).css('background', 'red');	//위로 slide하고 this(박스)의 배경을 빨강으로 변경
			})
			.slideDown('slow');
	
	});
});



//2번째 p태그를 화면에서 숨기기 eq() hide()
//a 태그를 클릭 : slideUp+slideDown=> slideToggle()
//read more 클릭 : 2번째 p태그 다시 보이게, read less	
//read less 클릭 : 2번째 p태그 안보이게,	   read more
//text():텍스트 값 추출,  text(값):텍스트 값 변경
$(function() {
	$('div.speech p').eq(1).hide();
	$('a.more').click(function() {
		$('div.speech p').eq(1).slideToggle('slow');
		
		var $link = $(this)	//JQuery객체 link에 a태그 할당
		if($link.text() == 'read more') {
			$link.text('read less');
		} else $link.text('read more');
	});
});