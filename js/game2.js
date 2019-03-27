$(function() {
	(function() {
		var isSwiping = false;
		var imgItemWidth = $('.m-screenshot-box .m-screenshot-item').outerWidth() + 100;
		$('.m-screenshot-box').on('click', '.m-button-left', function() {
			swipe('left');
		}).on('click', '.m-button-right', function() {
			swipe('right')
		}).on('mouseover', '.m-button-left', function() {
			$(this).find('.sprite').toggleClass('sprite-ic-arrow-1').toggleClass('sprite-ic-arrow-1-y');
		}).on('mouseover', '.m-button-right', function() {
			$(this).find('.sprite').toggleClass('sprite-ic-arrow-2').toggleClass('sprite-ic-arrow-2-y');
		}).on('mouseout', '.m-button-left', function() {
			$(this).find('.sprite').toggleClass('sprite-ic-arrow-1').toggleClass('sprite-ic-arrow-1-y');
		}).on('mouseout', '.m-button-right', function() {
			$(this).find('.sprite').toggleClass('sprite-ic-arrow-2').toggleClass('sprite-ic-arrow-2-y');
		});

		function swipe(dir) {
			if(isSwiping) {
				return false;
			}
			isSwiping = true;
			var left = parseFloat($('.m-screenshot-box .m-screenshot-list').css('left'));
			if(dir == 'left') {
				if(left < 0) {
					$('.m-screenshot-box .m-screenshot-list').animate({
						left: left + imgItemWidth
					}, function() {
						isSwiping = false;
					});
				} else {
					isSwiping = false;
				}
			} else {
				if($('.m-screenshot-box .m-screenshot-list').width() - (-left) - 30 > $('.m-screenshot-box').width()) {
					$('.m-screenshot-box .m-screenshot-list').animate({
						left: left - imgItemWidth
					}, function() {
						isSwiping = false;
					});
				} else {
					isSwiping = false;
				}
			}
		}
	})();

	(function() {
		var clickHandle = function(e) {
			var offsetX = e.offsetX;
			if(offsetX <= $(e.target).width() / 2) {
				$('.m-screenshot-list').viewer('prev');
			} else {
				$('.m-screenshot-list').viewer('next');
			}
			return false;
		}
		var mouseOverHandle = function(e) {
			var offsetX = e.offsetX;
			if(offsetX <= $(e.target).width() / 2) {
				$(this).css({
					cursor: 'url(/Public/Media/images/ic-arrow-l-w.png),pointer'
				})
			} else {
				$(this).css({
					cursor: 'url(/Public/Media/images/ic-arrow-r-w.png),pointer'
				})
			}
			return false;
		}
		$('.m-screenshot-list').viewer({
			url: 'data-original-src',
			movable: false,
			shown: function() {},
			viewed: function() {
				$('.viewer-container .viewer-canvas img').on('click', clickHandle).mousemove(mouseOverHandle);
			},
		});

	})();

	(function() {
		var height = $('.m-detail-text-box .m-detail-text-wrapper').height();
		if(height > 80) {
			$('.m-detail-text-box .m-detail-text-wrapper').css('maxHeight', '80px');
			$('.m-detail-text-box .u-btn-expand').show();
			$('.m-detail-text-box .u-btn-expand').show().attr('data-opend', '0');
		} else {
			$('.m-detail-text-box .u-btn-expand').hide();
		}
		$('.m-detail-text-box .u-btn-expand').on('click', function() {
			if($(this).attr('data-opend') == '0') {
				$(this).attr('data-opend', 1);
				$('.m-detail-text-box .m-detail-text-wrapper').css({
					'maxHeight': ''
				});
				$(this).html('<span>收起</span><i class="sprite sprite-ic-arrow-4"></i>');
			} else {
				$(this).attr('data-opend', 0);
				$('.m-detail-text-box .m-detail-text-wrapper').css({
					'maxHeight': '80px'
				});
				$(this).html('<span>展开</span><i class="sprite sprite-ic-arrow-3"></i>');
			}
			return false;
		});
	})();

	//gamedetail
	function gamedetail() {
		var cm = '';
		var cm1 = '';
		var urll = '../Indextestjson/RecommendGame.json'
		$.get(urll, function(data, status) {
			var res = data.RecommendGame;
			for(var i = 0; i < res.length; i++) {
				if(id == res[i].id) {
					console.log(res[i])
					$('.pic').append('<img src="' + res[i].ImgSrc + '">')
					$('.icon_stars').append('<i style="width:' + res[i].Rate + '%;"></i>')
					$('.game_wrap .game_text .txt_box div:first').append('<span class="name" style="margin-right:10px;">' + res[i].Name + '</span>')
					$('.m-detail-text-box').prepend('<div class="m-detail-text-wrapper">' + res[i].Content + '</div>')
					if(res[i].QRcodeAndSrc == "") {
						$('.game_wrap .btn_box a:first').addClass('off')
					} else {
						$('.game_wrap .btn_box a:first .sweep_code .code').append('<img src="' + res[i].QRcodeAndSrc + '">')
					}
					if(res[i].QRcodeIosSrc == "" || res[i].QRcodeIosSrc == undefined) {
						$('.game_wrap .btn_box a:last').addClass('off')
					} else {
						$('.game_wrap .btn_box a:last .sweep_code .code').append('<img src="' + res[i].QRcodeAndSrc + '">')
					}

					cm += '<div>版本：<span class="blue">' + res[i].System + '</span></div>';
					cm += '<div>类型：<span class="blue">' + res[i].GameType + '</span></div>';
					cm += '<div>状态：<span class="blue">' + res[i].State + '</span></div>';
					cm += '<div>更新时间：<span class="blue">' + res[i].Time + '</span></div>';
					cm += '<div class="intro">简介：' + res[i].Introduce + '</div>';
					var str =""
					for(var j = 1; j < 6; j++) {
						switch(j)
						{
						case 1:
  						str = res[i].Img1
  						break;
						case 2:
  						str = res[i].Img2
 						break;
 						case 3:
  						str = res[i].Img3
 						 break;
 						case 4:
  						str = res[i].Img4
 						break;
 						case 5:
  						str = res[i].Img5
 						break;					 
						}
						cm1 = `<li class="m-screenshot-item">;
						<img src="${str}" alt="${res[i].Name}" data-original-src="/Uploads/Picture/2017-01-17/587db739d7cc3.jpg" data-404-src="${res[i].Name}">
						<span class="img-font"><span class="img-font-cell">
						<div class="img-font-text"></div></span></span>
						</li>`
						$('.m-screenshot-box .m-screenshot-list').append(cm1)
					}
				}
			}
			$('.txt_box .test').append(cm)
			
		});
	}
	gamedetail()

	var urlq = '../Indextestjson/HotGame.json'
	$.get(urlq, function(data, status) {
		var res = data.HotGame;
		for(var i = 0; i < res.length; i++) {
			console.log(res[i].ImgSrc)
			var cm = `<li>
                      <div class="change_one rank_text" style="display: block;">
                      <div class="ranking ranking_${i+1}">
                      <span>${i+1}</span>
                      </div>
                      <div class="text">
                      <div class="name name_title">${res[i].Name}</div>
                      </div>
                      <a class="down_load" href="gamedetail.html?id=${res[i].id}">下载游戏</a>
                      </div>
                      <div class="change_two rank_pic" style="display: none;">
                      <div class="ranking ranking_1">
                      <span>${i+1}</span>
                      </div>
                      <div class="pic">
                      <span class="img-font"><span class="img-font-cell"><div class="img-font-text"></div></span></span>
                      <img src="${res[i].ImgSrc}">
                      </div>
                      <div class="text pt5 al_t">
                      <div class="name">宠物小精灵(安卓版)</div>
                      <p>
                        <span class="type pr5">单机游戏</span>
                      </p>
                      <p class="game-version">
                         <span class="game-version-and">
                         <img src="../picture/type_and.png">
                         <i>${res[i].AndSize}</i>
                         </span> 
                         <span class="game-version-ios">
                         <img src="../picture/type_ios1.png">                           
                         <i>${res[i].IosSize}</i>
                         </span>
                      </p>
                      </div>
                          <a class="down_load down_load_on down_load_position" href="gamedetail.html?id=${res[i].id}">下载游戏</a>
                      </div>
                      </li>`
			$('.hot_list ul').append(cm);
		}
			mouseover()
	});
		
		function mouseover(){
			$(".hot_list ul li").mouseover(function() {
            $(this).siblings().find(".change_one").show();
            $(this).siblings().find(".change_two").hide();
            $(this).find(".change_two").show();
            $(this).find(".change_one").hide();
        });
        var e = $('.hotgame'),o = e.offset();
        $(window).scroll(function() {
            var c = $(this).scrollTop();
            if (c>=o.top) {
                e.css({'position':'fixed','top':0,'background':'#FFFFFF','z-index':1000});
            } else {
                e.removeAttr('style');
            }
        });
		}
		

});