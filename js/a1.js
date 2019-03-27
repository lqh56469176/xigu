$.get("../Indextestjson/SlideShow.json", function(data, status) {
	var cm = "";
	var res = data.SlideShow;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<div class="item">';
        cm += '<img src="'+ res[i].ImgSrc+'" alt="'+ res[i].Title +'">';
        cm += '</div>';		
	}
	$('.carousel-inner').append(cm);
	$('.carousel-inner div:first').addClass('active');
});

$.get("../Indextestjson/BanInformation.json", function(data, status) {
	var cm = "";
	var res = data.BanInformation;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li>';
        cm += '<a href="information2.html?id='+res[i].id+'">'+res[i].Title+'</a><span class="time">'+res[i].Time+'</span>';
        cm += '</li>';
	}
	$('.news-box .tab-box .tab-conul2').append(cm);
});

$.get("../Indextestjson/News.json", function(data, status) {
	var cm = "";
	var res = data.News;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li>';
        cm += '<a href="information2.html?id=	'+res[i].id+'">'+res[i].Title+'</a><span class="time">'+res[i].Time+'</span>';
        cm += '</li>';
	}
	$('.news-box .tab-box .tab-conul1').append(cm);
});

$.get("../Indextestjson/Slide.json", function(data, status) {
	var cm = "";
	var res = data.Slide;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li style="position: absolute; width: 470px; left: 0px; top: 0px; display: list-item;">';
		cm += '<span class="img-font"><span class="img-font-cell"><div class="img-font-text"></div></span></span>';
		cm += '<a href="gamedetail.html?id='+res[i].id+'"><img src="'+ res[i].ImgBigSrc+'" alt="'+res[i].Name+'" width="470" height="350"></a>';
		cm += '</li>';
	}
	$('.news-box .slide-box .slide-img').html(cm);
});

$.get("../Indextestjson/Slide.json", function(data, status) {
	var cm = "";
	var res = data.Slide;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li class="">';
		cm += '<div class="pic">';
		cm += '<span class="img-font">';
		cm += '<span class="img-font-cell" style="width:40px;height:40px;">';
		cm += '<div class="img-font-text"></div>';
		cm += ' </span></span>';
		cm += '<img src="' + res[i].ImgSrc + '" width="40" height="40">';
		cm += '</div>';
		cm += '<div class="text">';
		cm += '<p class="name">' + res[i].Name + '</p>';
		cm += '<p class="intr">' + res[i].Introduce + '</p>';
		cm += '</div>';
		cm += '</li>';
	}
	$('.news-box .slide-box .slide-num').html(cm);
});

//推荐游戏
$.get("../Indextestjson/RecommendGame.json", function(data, status) {
	var cm = "";
	var res = data.RecommendGame;
	for(var i = 0; i < res.length; i++) {
		console.log(res[i]);
		cm += '<div class="hot-game-info hot-game-1">';
		cm += '<div class="top-info">';
		cm += '<div class="pic">';
		cm += '<span class="img-font"><span class="img-font-cell"><div class="img-font-text"></div></span></span>';
		cm += '<img src="' + res[i].ImgSrc + '" width="380" height="209">';
		cm += '</div>';
		cm += '<div class="down-code">';
		cm += '<div class="code">';
		cm += '<img src="' + res[i].QRcodeAndSrc + '"width="100" height="100">';
		cm += '</div>';
		cm += '<div class="text">';
		cm += '<p class="type">游戏类型:' + res[i].GameType;
		cm += '</p>';
		cm += '<p class="score">玩家评分：<span class="stars"><em style="width:80%;"></em></span></p>';
		cm += '<a href="gamedetail.html?id='+res[i].id+'">下载游戏</a>';
		cm += '</div>';
		cm += '</div>';
		cm += '</div>';
		cm += '<div class="bottom-info">';
		cm += '<h3 class="name">' + res[i].Name + '</h3>';
		cm += '<p>' + res[i].Introduce + '</p>';
		cm += '<a href="gamedetail.html?id='+res[i].id+'">进入官网</a>';
		cm += '</div>';
		cm += '</div>';    
	}
	$('.hot-game-list').html(cm);
});

$.get("../Indextestjson/HotGame.json", function(data, status) {
	var cm = "";
	var res = data.HotGame;
	for(var i = 0; i < res.length; i++) {
		cm += '<li>';
		cm += '<span class="img-font" style="left:20px;"><span class="img-font-cell"><div class="img-font-text"></div></span></span>';
		cm += '<a href="#" class="icon"><img src="' + res[i].ImgSrc + '" width="90" height="90"></a>';
		cm += '<div class="text">';
		cm += '<p>' + res[i].Name + '</p>';
		cm += '<span>类型：' + res[i].GameType + '</span>';
		cm += '<a href="gamedetail.html?id='+res[i].id+'">下载游戏</a>';
		cm += '</div>';
		cm += '</li>';   
	}
	$('.hot-game-min-box ul').html(cm);
});

$.get("../Indextestjson/GiftBag.json", function(data, status) {
	var cm = "";
	var res = data.GiftBag;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li>';
		cm += '<div class="pic">';
		cm += '<span class="img-font"><span class="img-font-cell"><div class="img-font-text"></div></span></span>';
		cm += '<img src="' + res[i].ImgSrc + '" width="60" height="60">';
		cm += '</div>';
		cm += '<div class="text">';
		cm += '<p title="' + res[i].Name + '">' + res[i].Name + '</p>';
		cm += '<span>' + res[i].Gift + '</span>';
		cm += '<a href="javascript:void(0);" class="name get get-gifts-btn" data-href="/media.php?s=/Gift/gift_detail/gid/MTAy.html">领取</a>';
		cm += '</div>';
		cm += '</li>';   
	}
	$('.rank-content .gift-list ul').html(cm);
});

$.get("../Indextestjson/NewGame.json", function(data, status) {
	var cm = "";
	var res = data.NewGame;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li>';
		cm += '<a href="gamedetail.html?id='+res[i].id+'" class="server-game-link">';
		cm += '<span class="img-font"><span class="img-font-cell"><div class="img-font-text" style="width:30px;"></div></span></span>';
		cm += '<img src="' + res[i].ImgSrc + '" style="width:30px;height: 30px;">';
		cm += '</a>';
		cm += '<span class="name " title="' + res[i].Name + '">';
		cm += '<a href="gamedetail.html?id='+res[i].id+'" alt="" title="' + res[i].Name + '">' + res[i].Name + '</a>';
		cm += '</span>';
		cm += '<span class="server " title="'+res[i].District+'">'+ res[i].District +'</span>';
		cm += '<span class="time ">' + res[i].Time + '</span>';
		cm += ' <a href="gamedetail.html?id='+res[i].id+'" class="link ">下载</a>';
		cm += '</li>';
	}
	$('.topic-rank-box.index .topic-list ul').html(cm);
});