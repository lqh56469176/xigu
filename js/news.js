console.log(id)

function GetArticle (urll,res){
	$.get(urll, function(data, status) {
	var cm = "";
	var res = data.News||data.BanInformation;
	for(var i = 0; i < res.length; i++) {
		if(res[i].id == id){
			$(".text_top").prepend('<h3>'+res[i].Title+'</h3><p>发布时间：'+res[i].Time+'</p>')
			$(".text_mid").append(''+res[i].content+'')
		}
	}

});
}
GetArticle("../Indextestjson/News.json")
GetArticle("../Indextestjson/BanInformation.json")
