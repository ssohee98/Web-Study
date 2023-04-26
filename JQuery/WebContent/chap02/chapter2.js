$(function(){
	$('#selected-plays > li').addClass('horizontal');	//selected-plays 아이디의 자식li(바깥li)에  horizontal스타일 적용
	$('li:not(.horizontal)').addClass('sub-level');		//모든 li중  horizontal클래스명을 갖고 있는 요소(바깥li)들 제외하고 (안li)에 sub-level스타일 적용
	
	$('a[href $= pdf]').addClass('pdflink');		//pdf으로 끝나는 href속성을 갖는 a태그에 pdflink
	$('a[href ^= mailto]').addClass('mailto');		//mailto로 시작하는 a태그에 malito
	//$('a[href *= henry]:not(.mailto)').addClass('henrylink');	//henry를 포함하는 a태그 중 malito클래스명을 갖는 요소를 제외하고
		//not select는 반드시 팩토리 함수 안에서
	$('a[href *= henry]').not('.mailto').addClass('henrylink');
		//not함수는 팩토리 밖에서 호출
	
	//$('tr:odd').addClass("alt");					//tr중에 홀수번째 alt 적용 (실제로는 짝수에 적용되어 보임)
	//$('tr:nth-child(odd)').addClass("alt");			//n-child사용하면 그대로 홀수에 적용되어 보임
	$('tr').filter(':odd').addClass("alt");			//tr중에 홀수번째 alt 적용 (실제로는 짝수에 적용되어 보임)
	
	//$('td:contains(Henry)').addClass("highlight");	//Henry값을 포함하는 td에게만
	//$('td:contains(Henry)').nextAll().andSelf().addClass("highlight");	//Henry값을 포함하는 td의 형제중 모든 집합에
	//$('td:contains(Henry)').parent().find('td').addClass("highlight");		//Henry값을 포함하는 td의 부모 tr중 모든 td에
	$('td:contains(Henry)').parent().find('td:eq(0)').addClass("highlight")	//Henry값을 포함하는 td의 부모 tr중 첫번째 td에
		.end().find('td:eq(1)').addClass('hightlight');							//위에서 하나 전으로 되돌려서(parent()까지) td의 부모 tr중 두번째 td에
		//하나 전으로 돌아가는 함수 end( )
	
	
});

	// ** find( ) / end( ) 중요 **
	
	
	// ** each 중요 **
	//each() => collection(배열)에 있는 요소를 추출하기 위해
	/*$('요소').each(function(index, item) {
		각 요소들의 작업을 수행 $(item)
	});*/
	
/*$.each(배열, function(index, item) {

});*/




