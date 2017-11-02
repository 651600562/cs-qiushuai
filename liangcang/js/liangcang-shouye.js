



var oTop = document.getElementById("goUp")



//回到顶部
// 给按钮绑定点击事件处理函数
$(oTop).click(function() {
	// 滚动到顶部， 通过设置
	//    "body,html" 兼容写法，确保所有浏览器都可以正常设置滚动条
	$("body,html").animate({scrollTop: 0});
});

var oHeader = document.getElementById("header1")
var oDaohang = document.getElementById("header-box-top")

// 到达一定位置才显示“回到顶部”按钮
//   思路：
//       1. 获取滚动条的位置
//       2. 根据位置判断，是否显示“回到顶部” 按钮
	$(document).scroll(function() {
	
	var top = $(document).scrollTop();
	if (top<190) {
		$(oHeader).stop(true,false).animate({top: "0px"},200);
		$(oDaohang).stop(true,false).animate({top: "60px"},200);
	}
	if (top>200) {
		
		$(oTop).fadeIn(500)
		$(document).mousewheel(function(e){
			
			if ($(oHeader).is(":animated")) {
				return ;
			}
			if ($(oDaohang).is(":animated")) {
				return ;
			}
	    	if (e.deltaY > 0) {
	    		
	    		$(oHeader).stop(true,false).animate({top: "0px"});
				$(oDaohang).stop(true,false).animate({top: "60px"});
	    	} else if(e.deltaY < 0){
	    		$(oHeader).stop(true,false).animate({top: "-60px"});
				$(oDaohang).stop(true,false).animate({top: "0px"});
	    		
	    	}  
   		})
	} else{
		$(oTop).stop(true,false).fadeOut(500)
		
	}
	
})

    


var state = true;
$("#search-logo").click(function(){
	if ($("#search-logo").is(":animated")) {
		return
	}
	if (state) {
		$("#search-box").animate({"left":"6px"},400)
		state = !state
	} else{
		$("#search-box").animate({"left":"280px"},400)
		state = !state
		
	}
	
})


var oHand = document.getElementById("ahand")

$(oHand).mouseover(function(){
	$(oHand).animate({"left":"-20px"},300,function(){
		$(oHand).animate({"left":"0px"},300,function(){
			$(oHand).animate({"left":"-20px"},300,function(){
				$(oHand).animate({"left":"0px"},300)
			})
		})
	})
})

var url = "http://h6.duchengjiu.top/shop/api_cat.php"
var oShop = document.getElementById("shop")
var oSpan = oShop.getElementsByTagName("span")

$.get(url,function(obj){
	
	
	for (var i = 0; i < obj.data.length; i++) {
		
		oSpan[i].innerHTML= obj.data[i].cat_name
	}

})



$("#header-box-top>ul>li").each(function(index){
	
	$(this).mouseover(function(){
		$("#header-box-top ul li").removeClass("active")
		$(this).addClass("active")
		
	})
	$(this).mouseout(function(){
		$("#header-box-top>ul>li").removeClass("active")
		$($("#header-box-top>ul>li")[p]).addClass("active")
		
	})
	$(this).click(function(){
		$("#header-box-top>ul>li").removeClass("active")
		$(this).addClass("active")
		p = index
	})
})
$(document).ready(function(){
		
		var name = $.cookie("name")
		
		if ($.cookie("name") != ""||$.cookie("name") != undefined) {
			
			if($.cookie("name") != ""){
				$("#sign-up").get(0).innerHTML = name
				$("#sign-in").get(0).innerHTML = "注销"
			}
		}
		
		
		
	})


$("#sign-up").click(function(){
	
	if ($("#sign-up").get(0).innerHTML != "登录") {
		$("#sign-up").get(0).href = "#"
	}else{
		$("#sign-up").get(0).href = "../login.html"
	}
})

$("#sign-in").click(function(){
	
	if ($("#sign-in").get(0).innerHTML == "注册") {
		$("#sign-in").get(0).href = "../register.html"
	}else{
		$("#sign-in").get(0).href = "#"
	}
	
	$.cookie("name","",{expires: 7, path: "/"})
	
	$("#sign-up").get(0).innerHTML ="登录"
	$("#sign-in").get(0).innerHTML ="注册"
	
})