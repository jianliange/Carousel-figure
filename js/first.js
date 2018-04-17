var i=0;
var timer;
$(function(){
	$(".photo").eq(0).show().siblings().hide();
	showTimer();
	
	$(".tab1").click(function(){
		clearInterval(timer);
		if(i==0){
			i=3;
		}
		i--;
		show();
	});
	
	$(".tab2").click(function(){
		clearInterval(timer);
		i++;
		if(i==3){
			i=0;
		}
		show();
	});
	
	$(".num").hover(function(){
		i = $(this).index();
		show();
		clearInterval(timer);
	},function(){
		showTimer();
	})
});

function show(){
	$(".photo").eq(i).fadeIn().siblings().fadeOut();
	$(".num").eq(i).addClass("appiont").siblings().removeClass("appiont");
}
function showTimer(){
	timer = setInterval(function(){
		if(i==3){
			i=0;
		}
		i++;
		show();
	},3000);
	
}
