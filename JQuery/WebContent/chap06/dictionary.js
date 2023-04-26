//step1 : 서버로부터 HTML이 데이터로 넘어올때
$(function() {
	$('#letter-a a').click(function() {	//서버로부터 결과값이 html이므로 바로 load 가넝한
		$('#dictionary').hide().load('a.html', function() {	
			$(this).fadeIn();
			//preventDefault();
		});
		
		return false;	//a태그는 기본이벤트 기능이 있으므로 취소
	
	});
});



/*//step2 : 서버로부터 JSON이 데이터로 넘어올때
$(function() {
	$('#letter-b a').click(function() {
		$.getJSON('b.json', function(data) {		//요청받을 데이터(배열)
			$('#dictionary').empty();				//dictionary의 값 모두 삭제
			//결과값 JSON: [{}, {}] => HTML
			$.each(data, function(index, item) {	//item은 각 배열의 요소(객체)
				var html = '<div class="entry">';
				html += '<h3 class="term">' + item.term+ '</h3>';
				html += '<div class="part">' + item.part+ '</div>';
				html += '<div class="definition">' + item.definition+ '</div>';
				html += '</div>';
					
				$('#dictionary').append(html);		//dictionary의 막내자식으로 하나씩 추가
			});
		});
		
		return false;	//a태그는 기본이벤트 기능이 있으므로 취소
	
	});
});
*/


//step2-1 : 서버로부터 JSON이 데이터로 넘어올때/ Ajax 통합함수 사용
$(function() {
	$('#letter-b a').click(function() {
		$('#dictionary').empty();	
		
		$.ajax({
			url: 'b.json',
			type: 'post',
			data: $(this).serialize(),
			dataType: 'json',
			success: function(data) {
				$.each(data, function(index, item) {
					var html = '<div class="entry">';
					html += '<h3 class="term">' + item.term+ '</h3>';
					html += '<div class="part">' + item.part+ '</div>';
					html += '<div class="definition">' + item.definition+ '</div>';
					html += '</div>';
					$('#dictionary').append(html);
				});
				//$('#dictionary').append(html);
			}
		});
		
		return false;	//a태그는 기본이벤트 기능이 있으므로 취소
	
	});
});


//step3 : 서버로부터 JS가 데이터로 넘어올때
$(function() {
	$('#letter-c a').click(function() {
		$.getScript('c.js');			//JS스크립트를 호출만 해주면 알아서 실행
		
		return false;
	});
});



//step4 : 서버로부터 XML이 데이터로 넘어올때
$(function() {
	$('#letter-d a').click(function() {
		$('#dictionary').empty();	
		//결과값 XML => HTML 변환 
		$.get('d.xml', function(data) {	
			$(data).find('entry').each(function(index) {
				$entry = $(this);		//this: entry태그를 JQuery객체 entry에
				
				var html = '<div class="entry">';
				html += '<h3 class="term">' + $entry.attr('term')+ '</h3>';		//객체 속성 뽑기
				html += '<div class="part">' + $entry.attr('part')+ '</div>';
				html += '<div class="definition">' + $entry.find('definition').text()+ '</div>';	//entry의 자식 def태그의 텍스트값 뽑기
				html += '</div>';
				
				$('#dictionary').append(html);	
			});
		});
		return false;
		
	});
});



//step5 : 서버로부터 JSP가 데이터로 넘어올때
$(function() {
	$('#letter-e a').click(function() {
		$('#dictionary').empty();		
		$.get('server3.jsp', {'term': $(this).text()}, function(data) {		//자신이 클릭한 텍스트값
			$('#dictionary').text(data);	
		});
		
		return false;
	});
});



//step6 : serialize() 함수 사용
$(function() {
	$('#letter-f form').submit(function() {
		$('#dictionary').empty();	
		
		$.ajax({	//통합 ajax함수 : 객체형식으로 값 넣기
			url: 'server3.jsp',
			type: 'post',
			data: $(this).serialize(),	//form의 값을 알아서 문자열형식으로 전달
			dataType: 'text',
			success: function(data) {	//성공시 실행할 함수
				$('#dictionary').text(data);	
			}
		});
		
		return false;	//form의 submit도 기본이벤트!! 이므로 취소해줘야함!!
	});
});
