//思路
    /*
     * 1.动画效果
     *     1、input失去焦点还原value 得到焦点清空value
     *     2、验证码随机且对应的input验证是否相同
     * 2.请求数据
     *     1、验证账号是否符合标准并且未被注册
     *     2、验证密码是否符合标准
     * 注册成功的条件
     *     1、账号符合标准且未被注册
     *     2、验证码输入正确
     *     3、密码符合标准
     *     4、两次密码输入相同
     *     5、同意注册条款
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
	
	//生成验证码
		$.idcode.setCode();
		// 完成输入之后判断
		$("#Txtidcode").change(function () {
			var r = $.idcode.validateCode();
			if (r == true){
				console.log("验证通过")
			}else{
				$("#Txtidcode").get(0).value = "输入验证码"
				alert("请重新输入")
			}
		})
		

//2.请求数据
		function oData(){
			//地址
			var url = "http://h6.duchengjiu.top/shop/api_user.php"
			//参数
			var data ={
				status:"register",
				username:$(".entry input").val(),
				password:$(".passWord input").val()
			}
			
			$.post(url,data,function(str){
				//返回数据str
				if(str.code == 0){
					//账号密码如果符合要求 g为ture 否则为false
					alert("注册成功")
				}else{
					alert(str.message)
				}
			})
			
		}
		
		
			
	//允许注册的条件
	function success(){
		var arr = true
		     //如果账号密码格式正确
		     
		    //如果两次密码输入不相同
			if ($(".passWordConfirm input").val() != $(".passWord input").val()) {
				alert("两次密码输入不相同")
				arr = false
				return arr
		   }
			//如果没有同意注册条款
			if (!$("#checkBox").is(":checked")) {
				alert("请阅读条款后注册")
				arr = false
				return arr
			}
			return arr
	}
	//用来判断账号密码是否符合格式
	var phone = /^1(3|4|5|7|8)\d{9}$/
	var passWord = /\w{6,20}/
	
	//点击注册
	$("#onRegister").click(function(){
	
	//保存账号 验证码 密码的值
	var a = $("#phoneText").val()
	var b = $("#Txtidcode").val()
	var c = $("#passwordTxet").val()
	

	
		if (phone.test(a)) {
			if(b != "输入验证码"){
				if(passWord.test(c)){
					if (success()) {
						oData()
					}
				}else{
					alert("请输入6-20位数字、字母或者符号组成的密码")
					return
				}
		    }else{
		    	alert("请输入验证码")
				return
		    }
		}else{
			alert("请输入正确的手机号")
		}
		
	})
	