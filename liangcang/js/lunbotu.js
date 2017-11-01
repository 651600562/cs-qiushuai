var oBox = document.getElementById("move-box")
var oBigBox = document.getElementById("big-box")
var i = 1;
var w = $("#move-box ul li").innerWidth()

var oBtnLeft = document.getElementById("btn-left")
var oBtnRight = document.getElementById("btn-right")



function imgMove(){
	$("#move-box").animate({"left":-i*w},1000,function(){
				
				if (i>5) {
					i=1
					$("#move-box").css("left","-1000px")
				}
				if (i<1) {
					i=5
					$("#move-box").css("left","-5000px")
				}
			
		})
	var o = i - 1
	$("#icon1 ul li").removeClass("current")
	
	if (o>4) {
		o=0
	}
	$("#icon1 ul li").eq(o).addClass("current")
	

}


var t = setInterval(function(){
	
	i++;
	imgMove()
	

	
},3000)


	
$("#icon1 ul li").each(function(index){
	$(this).click(function(){
		$("#icon1 ul li").removeClass("current")
		$(this).addClass("current")
		var x = index + 1
		i = x
		imgMove()
	
	})
})


$("#icon1 ul li").mouseover(function(){
	clearInterval(t)
})



$("#icon1 ul li").mouseout(function(){
	t = setInterval(function(){
	i++;
	imgMove()
	},3000)
})

$(oBigBox).mouseover(function(){
	clearInterval(t)
})

$(oBigBox).mouseout(function(){
	t = setInterval(function(){
	i++;
	imgMove()
	},3000)
})

$(oBtnLeft).click(function(){
	
	if($("#move-box").is(":animated")){
		return ;
	}
	i--;
	imgMove()
})

$(oBtnRight).click(function(){
	
	if($("#move-box").is(":animated")){
		return ;
	}
	i++;
	imgMove()
})

