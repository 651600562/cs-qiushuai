
var url = "http://h6.duchengjiu.top/shop/api_cat.php"
var oShop = document.getElementById("shop")
var oSpan = oShop.getElementsByTagName("span")

$.get(url,function(obj){
	
	console.log(obj)
	for (var i = 0; i < obj.data.length; i++) {
		
		oSpan[i].innerHTML= obj.data[i].cat_name
	}

})
var oShopBox = document.getElementById("shop-box")





//<div class="item"><div class="item-img"><img src=""/><a href='#'><div class='item-bg'><h2></h2><h3></h3></div></div></a>
//<a href="#"><p></p></a></div>
var url2 ="http://h6.duchengjiu.top/shop/api_goods.php"
$.get(url2,function(obj){
	
	console.log(obj)
	var h = "";
	for (var i = 0; i < obj.data.length; i++) {
		
		if (i%3 == 0) {
			h += "<div class='item first'><div class='item-img'><img src='"
		} else{
			h += "<div class='item'><div class='item-img'><img src='"
		}
		h += obj.data[i].goods_thumb
		h += "'/><a href='#'><div class='item-bg'><h2>￥"
		h += obj.data[i].price
		h += "</h2><h3>"
		h += obj.data[i].goods_desc
		h += "</h3></div></div></a><a href='#'><p>"
		h += obj.data[i].goods_name
		h += "</p></a></div>"
		
	}
	$(oShopBox).html(h)
})



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
	
	if (top>100) {
		$(oTop).fadeIn(500)
		$(oHeader).animate({top: "-60px"});
		$(oDaohang).animate({top: "0px"});
	} else{
		$(oTop).stop(true,false).fadeOut(500)
		$(oHeader).stop(true,false).animate({top: "0px"});
		$(oDaohang).stop(true,false).animate({top: "60px"});
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