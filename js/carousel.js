
var GetURLParamValue = function (key) {
  var resultValue = "";
  try {
    var tStr = window.location.search.split('\?');
    for (var i = 0, len = tStr.length; i < len; i++) {
      var tArray = tStr[i].split('=');
      var tmps = tArray[0];
      if (tmps==key) {
        var tValue = tArray[1];
        if(-1!=tValue.search("&")){
          return tValue.split('&')[0];
        }else{
          return tArray[1];
        }
      }
    }
  } catch (e) {
  }
  return resultValue;
}

var tab = GetURLParamValue("tab");

if(tab == '2'){
	$(".imgbox img:first-child")[0].src='img/head-2-3.png';
}

var scrollImg = $.mggScrollImg('.imgbox', {
	loop: false, //循环切换
	auto: false, //自动切换
	auto_wait_time:5000,
	callback: function(ind) { //这里传过来的是索引值
		$('.page span').eq(ind).addClass('active').siblings().removeClass('active');
	}
});

$(".page span").on("click",function(){
	scrollImg.go($(this).index());
});
