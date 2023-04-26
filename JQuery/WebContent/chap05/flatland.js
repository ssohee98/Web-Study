/*$(function() {	//이탤릭체 내용(id=footnote)을 모두 footer에 각주로 빼주기
	//1. id=note	id footer앞에 ol태그 생성
	$('<ol id="note"></ol>').insertBefore('#footer');
	
	//2. span 앞에 각 a태그 [1] [2] [3]... 생성
	$('span.footnote').each(function(index) {
		$(this).before('<a id="context-'+(index+1)+ '">[' + (index+1) +']</a>')
			.appendTo('#note')	//id not ol의 자식으로 span태그들 넣기
			.append('&nbsp; <a href="#context-'+(index+1)+'">context-'+(index+1)+'</a>')
			.wrap('<li></li>');
	});
});*/

$(function(){
	//1. id=note    ol태그를 생성하자.
	$('<ol id="note"></ol>').insertBefore('#footer');
	
	//2. span 앞에 [1] [2] [3]
	$('span.footnote').each(function(index){
		$(this).before('<a id="context-' + (index+1) +  '">[' + (index+1) + ']</a>')
					.appendTo('#note')
					.append('&nbsp; <a href="#context-'+(index+1) + '">context-' + (index+1)+ '</a>')
					.wrap('<li></li>');
	});
	
});