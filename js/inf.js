$().ready(function() {
	$(".newswrap .ul_news:first").css("display", "block");
	$(".left_news #tab1 li:first").addClass("active");
	$(".left_news #tab1 li").click(function() {
		//通过 .index()方法获取元素下标，从0开始，赋值给某个变量
		var _index = $(this).index();
		//让内容框的第 _index 个显示出来，其他的被隐藏
		$(".newswrap div .ul_news").eq(_index).show().siblings().hide();
		//改变选中时候的选项框的样式，移除其他几个选项的样式
		$(this).addClass("active").siblings().removeClass("active");
	});
});

//tab1
$.get("../InformationTestJson/Tab1.json", function(data, status) {
	var cm = "";
	var res = data.Tab1;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li><a href="#">';
		cm += '<span class="img-font "><span class="img-font-cell ">';
		cm += '<div class="img-font-text "></div>';
		cm += '</span></span>';
		cm += '<img title="' + res[i].Title + '" src="' + res[i].ImgSrc + '">';
		cm += '</a><div class="news_div">';
		cm += '<h3><a href="#"title="' + res[i].Title + '">' + res[i].Title + '</a></h3>';
		cm += '<p title="' + res[i].Content + '">' + res[i].Content + '</p>';
		cm += '<em>更新时间：2017-03-01</em>';
		cm += '</div></li>';
	}
	$('.newswrap .ul_news1').append(cm);
});

//tab2
$.get("../InformationTestJson/Tab2.json", function(data, status) {
	var cm = "";
	var res = data.Tab2;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li><a href="#">';
		cm += '<span class="img-font "><span class="img-font-cell ">';
		cm += '<div class="img-font-text "></div>';
		cm += '</span></span>';
		cm += '<img title="' + res[i].Title + '" src="' + res[i].ImgSrc + '">';
		cm += '</a><div class="news_div">';
		cm += '<h3><a href="#"title="' + res[i].Title + '">' + res[i].Title + '</a></h3>';
		cm += '<p title="' + res[i].Content + '">' + res[i].Content + '</p>';
		cm += '<em>更新时间：2017-03-01</em>';
		cm += '</div></li>';
	}
	$('.newswrap .ul_news2').append(cm);
});

//tab3
$.get("../InformationTestJson/Tab3.json", function(data, status) {
	var cm = "";
	var res = data.Tab3;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li><a href="#">';
		cm += '<span class="img-font "><span class="img-font-cell ">';
		cm += '<div class="img-font-text "></div>';
		cm += '</span></span>';
		cm += '<img title="' + res[i].Title + '" src="' + res[i].ImgSrc + '">';
		cm += '</a><div class="news_div">';
		cm += '<h3><a href="#"title="' + res[i].Title + '">' + res[i].Title + '</a></h3>';
		cm += '<p title="' + res[i].Content + '">' + res[i].Content + '</p>';
		cm += '<em>更新时间：2017-03-01</em>';
		cm += '</div></li>';
	}
	$('.newswrap .ul_news3').append(cm);
});

//Gife Center
$.get("../Indextestjson/GiftBag.json", function(data, status) {
	var cm = "";
	var res = data.GiftBag;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li><a class="a_seat z_clearfix" href="" title="'+res[i].Name+'">';
		cm += '<div class="seat z_clearfix">';
		cm += '<span class="img-font "><span class="img-font-cell ">';
		cm += '<div class="img-font-text "></div>';
		cm += '</span></span>';
		cm += '</div><img src="' + res[i].ImgSrc + '"></a>';
		cm += '<i class="z_clearfix">';
		cm += '<a href="/media.php?s=/Gift/gift_detail/gid/MTAy.html" title="' + res[i].Name + '">' + res[i].Name + '</a></i>';
		cm += '<em class="z_clearfix" title="' + res[i].Gift + '">' + res[i].Gift + '</em>';
		cm += '<a class="lqlb z_clearfix" href="/media.php?s=/Gift/gift_detail/gid/MTAy.html">领取</a> </li>'; 
	}
	$('.bag_ul').html(cm);
});

//HotGame
$.get("../InformationTestJson/HotGame.json", function(data, status) {
	var cm = "";
	var res = data.HotGame;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<h3 class=""><i style="width:92px;">'+res[i].Name+'</i>';
		cm += '<i style="width:92px;">'+res[i].Times+'</i>';
		cm += '<i style="width:92px;">'+ res[i].Type+'</i></h3>';
		cm += '<ul style="display: none;"><li><a href="/media.php?s=/Game/game_detail/id/54.html" title="'+res[i].Name+'">';
		cm += '<span class="img-font "><span class="img-font-cell">';
		cm += '<div class="img-font-text "></div></span></span>';
		cm += '<img src="'+res[i].ImgSrc+'"></a>';
		cm += '<span style="height:66px;padding-top:10px;" class="sideMenu_span">';
		cm += '<a href="" class="android" title="安卓下载" style="text-align: center">安卓下载</a>';
		cm += '<a style="text-align: center" href="" class="ios" title="IOS下载">IOS下载</a>';
		cm += '</span></li></ul>';
	}
	$('.sideMenu').append(cm);
	$('.sideMenu h3:first').addClass('on');
});

