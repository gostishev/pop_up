	$(".free_coupon_close").on("click",function(){
 		$(".free_coupon_fon").toggleClass("active");
 	});

 	$(".succes_close").on("click",function(){
 		$(".succes_fon ").toggleClass("active");
 	});

 	$(".free_coupon__btn").on("click",function(){
 		$(".succes_fon ").toggleClass("active");
 		$(".free_coupon_fon ").toggleClass("active");
 	});

 	$(".succes__btn").on("click",function(){
 		$(".succes_fon ").toggleClass("active");
 	});
 	// 


 	$(".christmas_sale_sticker").on("click",function(){
 		$(".christmas_sale").toggleClass("active");
 		// $(".christmas_sale_sticker").fadeOut("slow");
 	});

 	$(".christmas_sale__close").on("click",function(){
 		$(".christmas_sale").toggleClass("active");
 	});

 	$(".christmas_sale__text").on("click",function(){
 		$(".christmas_sale").toggleClass("active");
 	});



 	$(".christmas_sale__btn").on("click",function(){
 		$(".christmas_sale_succes").fadeIn("slow");
 		$(".christmas_sale").fadeOut("slow");
 	});

    $(".christmas_sale_succes__close").on("click",function(){
 		$(".christmas_sale_succes").fadeOut("slow");
 	});

    $(".christmas_sale_succes__btn").on("click",function(){
 		$(".christmas_sale_succes").fadeOut("slow");
 	});



 	$(".christmas_sale_error__close").on("click",function(){
 		$(".christmas_sale_error").fadeOut("slow");
 	});

 	$(".christmas_sale_error__btn").on("click",function(){
 		$(".christmas_sale_error").fadeOut("slow");
 	});



