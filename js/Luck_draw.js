$(document).ready(function() {
	var win_w = $(window).width();
	var win_h = $(window).height();
	positionInit();

	/*数字滚动*/
	var index = 0;

	function numberback() {
		$(".number li").eq(index).css({
			display: "block",
		}).siblings().css({
			display: "none"
		});
		index++;
		if(index >= 5) {
			index = 0;
		}
	}
	var num = setInterval(function() {
		numberback();
	}, 100);
	/*图片初始化定位*/
	function positionInit() {
		win_w = $(window).width();
		win_h = $(window).height();
		var peo_w = $(".people").width();
		var red_w = $(".redbag").width();

		var peo_left = (win_w - peo_w) / 2;
		var red_left = (win_w - red_w) / 2;

		$(".warp ").css({
			"background-size": win_w + "px " + win_h + "px",
		});
		/*$(".warp .center .people").css({

			top: win_h * 0.33 + "px"
		});*/
		/*$(".warp .center .taijie").css({
			top: win_h * 0.72 + "px"
		});*/
	}
	/*窗口大小改变重新定位*/
	$(window).resize(function() {

		positionInit();
		mo();
	});
	/*抽奖完成页跳出*/
	mo();

	function mo() {

		var end_w = $(".end-img").width();
		var end_h = $(".end-img").height();

		var input_w = $(".name").width();

		var left = (win_w - end_w) / 2;
		var top = (win_h - end_h) / 2;

		var left_input = (end_w - input_w) / 2;
		var top_input = end_h * 0.6;

		/*$(".name").css({
			left: left_input + "px",
			top: top*1.1 + "px"
		});
		$(".tele").css({
			left: left_input + "px",
			top: top*1.1 + 50 + "px"
		});*/

	}
	/*抽奖结束时的样式*/
	function ends() {
		$(".end").css({
			position: "absolut",
			top: "0px",
			left: "0px",
			display: "block",
		});
		/*$(".center").css({
			display: "none",
		});*/
		$(".number").css({
			display: "none"
		});
	}
	/*重新开始抽奖*/
	function starts() {
		$(".end").css({
			display: "none",
		});
		/*$(".center").css({
			display: "block",
		});*/
		$(".number").css({
			display: "block"
		});
	}
	/*抽奖结束定时器*/
	var time = 0;

	setInterval(function() {
		time++;
		if(time == 1) {
			end();
		} else if(time == 31) {
			start();
			
		} else if(time > 91) {
			time = 0;
		}

	}, 100);

	function end() {
		var end = setTimeout(function() {
			clearInterval(num);
			mo();
			ends();
		}, 3000);
	}

	function start() {
		var reStart = setTimeout(function() {
			num = setInterval(function() {
				numberback();
			}, 100);
			positionInit();
			mo();
			starts();
		}, 6000);
	}

});