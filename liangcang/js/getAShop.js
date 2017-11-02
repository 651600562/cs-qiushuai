
var oUl = document.getElementById("picBox")



var aa = location.search


aa = aa.slice(1)



aa = aa.split("=")

console.log(aa[1])
//<li><a href='#'></a></li>
var url4 ="http://h6.duchengjiu.top/shop/api_goods.php"

var data4 = {
	"goods_id":aa[1]
}

						/*<i>￥</i>
							<p>加入购物车</p>*/
$.get(url4,data4,function(obj){
	console.log(obj)
	var h = "";
	var o = "";
	h += "<li><img src='"
	h += obj.data[0].goods_thumb
	h += "'/></li>"
	o += "<i>￥"
	o += obj.data[0].price
	o += "元</i><p>加入购物车</p>"
	$("#picBox ul").html(h)
	$("#shop-box .priceBox").html(o)
})