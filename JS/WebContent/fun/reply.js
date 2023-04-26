let replyService = (function(){	//즉시실행함수
	
	function create() {
		console.log('create');
	}
	
	function update() {
		console.log('update');
	}
	
	function getList(param, callback){
		let data = "결과값";
		callback(data);
	}
	
	return{	//객체 리턴 -> replyServie도 객체
		create: create,
		update: update,
		getList: getList
	}; // 중괄호는 객체, 대괄호는 배열

	
})();