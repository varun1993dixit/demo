$ = jQuery
$(function() {

var counter=01;
$(".counter-slides").empty();
$(".counter-slides").append("<div class=current-slide>0"+ counter +"</div>");
$(".counter-slides").append("<div class=total-slides>0"+$(".slider-wrap").length +"</div>");


//console.log($(".slider-wrap").length)

$("body").on("click",".unslider-arrow",function(){
	
	// for(var i=1;i<=$(".slider-wrap").length;i++){if($(this).text()=="Next"){
	$(".current-slide").empty();
	if(counter>=($(".slider-wrap").length)){
		counter=0;
	}
	counter++;
		$(".counter-slides .current-slide").text("0"+counter)	;
		
	}
else{
	$(".current-slide").empty();
	console.log(counter)
	if(counter==1){
		counter=$(".slider-wrap").length;
		$(".counter-slides .current-slide").text("0"+counter);
	}else{
	counter--;
	
	$(".counter-slides .current-slide").text("0"+counter);
	}
}	
	
})	

$('.left-box >div').click(function(e){
	e.stopPropagation();
	
	$('.video-info').eq(counter-1).toggleClass('show');
});	


$("body").on("click",function(e){
	console.log(e.target.className)
	if(e.target.className == "slider" || e.target.className == "slider-wrap"  || e.target.className ==  "body-wrap"){
		
			$('.video-info').removeClass('show');
	}

})
$('.slider-wrap').on('click',function(){
	$('.video-info').removeClass('show');
})
$('iframe').load(function(){
  $(this).contents().find("body").on('click', function(event) { alert('test'); });
});

}); 

