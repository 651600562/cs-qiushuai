//思路
    /*
     * 1.动画效果
     *     1、input失去焦点还原value 得到焦点清空value
     *     2、验证码随机且对应的input验证是否相同
     * 2.请求数据
     *    验证账号密码是否正确
     * 登录成功的条件
     *     1，账号密码正确
     * */
    
//1.动画效果
    //1、input失去焦点与得到焦点
    fb()
	function fb(){
		//创建一个变量保存value值for
		   var oInput = document.getElementsByTagName("input")
		   
		   var x = [];
		   
		 for (var j = 0;j<oInput.length;j++) {
		  	x.push(oInput[j].value)
		  }
		//创建一个空变量保存改变的value
	    var i = ""
	    //得到焦点value变成空
		$("input").focus(function(){
			//保存当前点击的输入框内的value值
			i = $(this).val();
			for (var j = 0;j<oInput.length;j++) {
				if (i == x[j]) {
					this.value = ""
				}
			}
			
		})
		//失去焦点复原
		$("input").blur(function(){
			//如果输入框内value值发生改变，保存改变的数值
			if($(this).val() != ""){
				i = $(this).val();
			}
			this.value = i
		})
	}
	
	//点击将密码在明文和隐藏之间转换
	var a = 0
	$(".passwordshow").click(function(){
		a++
		if(a%2 == 0){
			$("#password").get(0).type = "text"
			$(".passwordshow").get(0).innerHTML = "明文密码"
		}else{
			$("#password").get(0).type = "password"
			$(".passwordshow").get(0).innerHTML = "隐藏密码"
		}
		console.log(a)
	})
	
//点击登录
	$("#loginbtn").click(function(){
		//请求数据
			//地址
			var url = "http://h6.duchengjiu.top/shop/api_user.php"
			//参数
			var data ={
				status:"login",
				username:$("#phonetext").val(),
				password:$("#password").val()
			}
			//返回结果
			$.post(url,data,function(str){
				if(str.code == 0){
					alert("登录成功")
				}else{
					alert(str.message)
				}
			})
		
	})