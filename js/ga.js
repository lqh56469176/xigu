$.get("../GameTestJson/Search.json", function(data, status) {
	var cm = "";
	var res = data.Search;
	console.log(res)
	for(var i = 0; i < res.length; i++) {
		cm += '<li class="laybox ">';
        cm += ' <a href="/media.php?s=/Game/game_detail/id/49.html" target="_self" class="img">';
        cm += '<img src="http://sy.vlcms.com/Uploads/Picture/2018-04-12/5acf278b81603.png" width="96" height="96" class="zimg_img">';
        cm += '<span class="zdis_tab">';
        cm += '<span class="zdis_tabcell">';
        cm += '<div></div>';
        cm += '</span></span></a>';
        cm += '<div class="info"> <a href="/media.php?s=/Game/game_detail/id/49.html" target="_self" class="name" title="COK列王的纷争">COK列王的纷...</a>';
        cm += '<div class="row">';
        cm += '<span class="col-1">版本：<i class="pf-android" title="安卓版本"></i><i class="pf-ios" title="IOS版本"></i></span>';
        cm += '<span class="col-2">类型：<em>动作冒险 </em></span> </div>';
        cm += '<div class="row"> <span class="col-1">评分：<em>7</em></span>';
        cm += '<span class="col-2">更新时间：<em>2017-01-05</em></span> </div>';
        cm += '<p class="intro"> 简介：手游年轻派 回合新经典 </p>';
        cm += ' <div class="opt"> <a href="/media.php?s=/Game/game_detail/id/49.html" target="_self" class="g-btn enterhome"><i></i>进入官网</a> <a href="/media.php?s=/Game/game_detail/id/49.html" class="g-btn download"><i></i>下载游戏</a> </div>';
        cm += '</div>';
        cm += '</li>';
	}
	$('.game-list').append(cm);
	$('.game-list li:nth-child(3n+3)').addClass('slb');
});



                 
                      
                    
                    
                        
                            
                        
                  
                
                  
                  
                  
                  
                    
                  
                  
                
              