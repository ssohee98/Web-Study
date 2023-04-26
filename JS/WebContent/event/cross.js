let cross = {};
cross.Event = {};

//크로스 브라우징
cross.Event.addListener = function(element, name, handler, capture) {	//이벤트 요소, 이벤트 이름, 이벤트 핸들러함수
	capture = capture | false;
	
	if(element.addEventListener) {	//표준브라우저
		element.addEventListener(name, handler, capture);
	} else {	//구형 IE
		element.attachEvent('on' +name, handler);
	}
}

cross.Event.stopBubble = function(event) {
	if(event.stopPropagation) {		//표준브라우저일때 이벤트버블링 방지하는 함수
		event.stopPropagation();
	} else {	//구형 IE일때
		event.cancelBubble = true;
	}
}