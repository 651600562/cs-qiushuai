var url3 ="http://h6.duchengjiu.top/shop/api_cart.php"

$.get(url3,function(obj){
	
	console.log(obj)
	var h = "";
	/*for (var i = 0; i < obj.data.length; i++) {
		
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
	$(oShopBox).html(h)*/
})
