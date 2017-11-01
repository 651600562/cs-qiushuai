
var oUl = document.getElementById("ul-box")

//<li><a href='#'></a></li>
var url2 ="http://h6.duchengjiu.top/shop/api_cat.php"
$.get(url2,function(obj){
	
	
	var h = "";
	h += "<li><a href='#' class='bg-photo new'>新品</a></li>"
	for (var i = 0; i < obj.data.length; i++) {
		h += "<li><a href='#'>"
		h += obj.data[i].cat_name
		h += "</a></li>"
		
	}
	$(oUl).html(h)
})


