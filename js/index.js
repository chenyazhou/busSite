/**
 * Created by dsj on 20170327
 */
(function () {
  var srcUserId , phone = document.querySelector(".tel"),
    code = document.querySelector(".code"),
    pwd = document.querySelector(".pwd"),
    checkCode = document.querySelector(".checkCode"),
    resultMsg = document.querySelector("#result-msg"), srcName,subChannelCode;




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

  var init = function () {



  }
  init();
})();
