$(function() {	
	$('.quantity input').change(function() {
		var totalCost = 0;
		var totalQuantity = 0;
		
		$('table tbody tr').each(function(index) {											//each():각 요소별로 반복
			var price = parseFloat($(this).find('.price').text().replace(/^[^\d.]/, ''));	//find():자식찾는함수	숫자로 시작하지 않으면 지우기
			price = isNaN(price) ? 0 : price;
			
			var quantity = parseInt($(this).find('.quantity input').val());
			quantity = isNaN(quantity) ? 0 : quantity;
			
			var cost = price*quantity;
			$(this).find('.cost').text('$'+cost.toFixed(2));		//cost에 계산한 금액을 소수점 둘째자리까지
			
			totalCost += cost;
			totalQuantity += quantity;

		});

		var tax = totalCost*0.06;
		var shipping = totalQuantity*2;
		var total = totalCost+tax+shipping;
		
		
		$('.subtotal .cost').text('$'+totalCost.toFixed(2));
		$('.shipping .quantity').text(totalQuantity);
		$('.tax .cost').text('$'+tax.toFixed(2));
		$('.shipping .cost').text('$'+shipping.toFixed(2));
		$('.total .cost').text('$'+total.toFixed(2));
	});
	
});






