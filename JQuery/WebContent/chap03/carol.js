//step1 : switcher-large버튼 클릭했을때 글씨 커지도록
/*$(function() {
	$('#switcher-large').on('click', function(){
		$('body').addClass('large');
	});
});
*/



/*//step2 : Large Print버튼 클릭시 large, Narrow Column클릭시 narrow
//removeClass('');, Default클릭시 처음상태로 초기화
$(function() {
	$('#switcher-large').on('click', function(){
		$('body').removeClass('narrow').addClass('large');
	});
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('large').addClass('narrow');
	});
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
	});
});*/



/*//step3 : 클릭한 버튼만 selected 적용되도록
$(function() {
	$('#switcher-large').on('click', function(){
		$('body').removeClass('narrow').addClass('large');
		$('.button').removeClass('selected');
		$(this).addClass('selected');		//이벤트 핸들러 안이므로 this로 대상 switcher-large에 selected적용
		
	});
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('large').addClass('narrow');
		$('.button').removeClass('selected');
		$(this).addClass('selected');	
	});
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
		$('.button').removeClass('selected');
		$(this).addClass('selected');	
	});
});*/
/*


//step4 : selected 관련된 중복된 코드를 최적화
$(function() {
	$('#switcher-large').on('click', function(){
		$('body').removeClass('narrow').addClass('large');
	});
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('large').addClass('narrow');
	});
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
	});
	
	$('#switcher.button').on('click', function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');		//이벤트 핸들러 안이므로 this로 각 이벤트 대상(클릭한버튼)에 selected적용
	});
});*/



/*//step5 : 전체적으로 중복된 코드를 !좀더좀더! 최적화
$(function(){	
	$('#switcher .button').on('click', function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').removeClass('narrow').addClass('large');
		}else if(this.id == 'switcher-narrow'){
			$('body').removeClass('large').addClass('narrow');
		}		
	});
});*/



/*//step6 : on함수 대신 개별 함수 click이벤트 바로 
$(function() {
	$('#switcher .button').click(function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');		//이벤트 핸들러 안이므로 this로 각 이벤트 대상(클릭한버튼)에 selected적용
		$('body').removeClass();			//비워두면 모두 remove
	
		//this.id 가 자바스크립트 객체의 id값을 받아와야하므로 팩토리안에XX
		if(this.id=='switcher-large') {	//무슨 버튼을 눌렀는지 구분
			$('body').removeClass('narrow').addClass('large');
		} else if(this.id=='switcher-narrow') {
			$('body').removeClass('large').addClass('narrow');
		}
	
	});
});
*/


//step7 : hover(마우스 올리고 내렸을때)이벤트 주입 : 처음함수 올렸을때,두번째함수는 벗어났을때
$(function() {
	$('#switcher .button').hover(function(){
		$(this).addClass('hover');
	}, function(){
		$(this).removeClass('hover');
	});
});



/*//step8 : <h3>스타일 변환기</h3> 클릭했을때 => 버튼 3개가 화면에서 사라지도록
$(function() {
	$('#switcher h3').click(function() {
		$('#switcher .button').toggleClass('hidden');	//togle:add+remove햡쳐진것
	});
	
	$('#switcher .button').click(function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');		//이벤트 핸들러 안이므로 this로 각 이벤트 대상(클릭한버튼)에 selected적용
		$('body').removeClass();			//비워두면 모두 remove
	
		//this.id 가 자바스크립트 객체의 id값을 받아와야하므로 팩토리안에XX
		if(this.id=='switcher-large') {	//무슨 버튼을 눌렀는지 구분
			$('body').removeClass('narrow').addClass('large');
		} else if(this.id=='switcher-narrow') {
			$('body').removeClass('large').addClass('narrow');
		}
	
	});
});	*/



//step9 : <h3>안에 버튼3개가 들어있음 => 이벤트 버블링 방지
/*$(function() {
	$('#switcher').click(function() {
		$('#switcher .button').toggleClass('hidden');	//togle:add+remove햡쳐진것
	});
	
	$('#switcher .button').click(function(event) {
		$('.button').removeClass('selected');
		$(this).addClass('selected');		//이벤트 핸들러 안이므로 this로 각 이벤트 대상(클릭한버튼)에 selected적용
		$('body').removeClass();			//비워두면 모두 remove
	
		//this.id 가 자바스크립트 객체의 id값을 받아와야하므로 팩토리안에XX
		if(this.id=='switcher-large') {	//무슨 버튼을 눌렀는지 구분
			$('body').removeClass('narrow').addClass('large');
		} else if(this.id=='switcher-narrow') {
			$('body').removeClass('large').addClass('narrow');
		}
	
		event.stopPropagation();
		
	});	
});*/



//step10 : on('click')으로 이벤트 발생 => off('click')으로 이벤트 해제
//			large, narrow 버튼을 클릭 후 버튼이 사라지게하는 이벤트를 해제
$(function() {
	$('#switcher').on('click.kosa', function() {
		$('#switcher .button').toggleClass('hidden');	//togle:add+remove햡쳐진것
	});
	
	$('#switcher').on('click.metanet', function() {
		alert("다른 이벤트 내용");
	});
	//같은 아이디에 이벤트가 여러개면 이벤트이름을 붙여서 
	
	$('#switcher .button').click(function(event) {
		$('.button').removeClass('selected');
		$(this).addClass('selected');		//이벤트 핸들러 안이므로 this로 각 이벤트 대상(클릭한버튼)에 selected적용
		$('body').removeClass();			//비워두면 모두 remove
	
		//this.id 가 자바스크립트 객체의 id값을 받아와야하므로 팩토리안에XX
		if(this.id=='switcher-large') {	//무슨 버튼을 눌렀는지 구분
			$('body').removeClass('narrow').addClass('large');
		} else if(this.id=='switcher-narrow') {
			$('body').removeClass('large').addClass('narrow');
		}
	
		event.stopPropagation();
	});	
	
	
	$('#switcher-large, #switcher-narrow').click(function() {
		$('#switcher').off('click.kosa');
		//kosa이벤트 하나만 해제하기
	});
	
	
//	$('#switcher').trigger('click.kosa');	//trigger함수로 kosa호출:이벤트를 처음부터 자동으로 발생시킴
	$('#switcher').click();					//처음부터 클릭되었다고 치기:이벤트자동발생
});