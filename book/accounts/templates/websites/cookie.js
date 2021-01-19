var CookieClient = function(){

  var c = this;
  c.set = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";SameSite=Strict";
  }

  c.del = function(cname){
    var d = new Date();
    d.setTime(d.getTime() - 2);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + ";" + expires + ";path=/" + ";SameSite=Strict";
  }

  c.get = function(cname) {

      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
}
