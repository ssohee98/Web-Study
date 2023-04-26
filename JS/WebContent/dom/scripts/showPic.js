function showPic(obj) {	
	//클릭한 자신의 a태그의 src를 화면에 출력하기 위해 img의 src에 전달
	let source = obj.getAttribute("href");	//href의 속성값 뽑기
	let placeholder = document.getElementById("placeholder");	//img객체 id로 가져오기
	
	placeholder.setAttribute("src", source);	//placeholder의 src에 a href에서 뽑아온 src넣어주기
	
	let title = obj.getAttributeNode("title").value;	//href의 title값 뽑기
	//document.getElementById("description").innerHTML = title;	//desciption에 innerHTML로 뽑아온 title넣어주기

	
	let description = document.getElementById("description")
	
	if(description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = title;
	}
};
		
	function prepareGallery() {
		let imagegallery = document.getElementById("imagegallery");	//ul 불러오기
		let links = imagegallery.getElementsByTagName("a");			//a 태그들 불러오기
		
		for(let i = 0; i < links.length; i++) {
			links[i].addEventListener('click', function(e){	//기본 이벤트를 취소하기위해 이벤트객체e 필요
				e.preventDefault();	//기본 이벤트를 취소
				showPic(this);		//이벤트핸들러 안에서 this 이벤트대상:links
			}, false);
		}
	}
	
	window.onload = prepareGallery;
			