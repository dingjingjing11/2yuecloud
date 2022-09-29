function home() {
	function rem() {
		//获取设备的宽
		console.log(document.documentElement.clientWidth);
		//根据设备的宽设置html的字体大小
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 279 + "px";
		// 			clientWidth 设备宽度   ---》设计稿的宽度 	  750/750 = 1px = 1rem													
		//
	
	
	
	}
	rem();
	//当窗口改变时，重新进行计算
	window.onresize = rem;
	
  }
   
  export {
	home
  }

