var NetworkClient = function(){

  var c = this;
  c.makePOST = function(url, data, sdk_key=null) {
    return new Promise(function(resolve, reject) {

      var r = new XMLHttpRequest();
      r.open("POST", url, true);
      r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      if (sdk_key != null){
        r.setRequestHeader("Authorization", "SDK-TOKEN " + sdk_key)
      }
      r.onload = function () {

        if (r.status >= 200 && r.status < 300 && r.readyState >= 3)  {

          var d = JSON.parse(r.responseText);
          resolve(d);
        } else {

          reject(r.responseText);
        }
      };
      r.onerror = function () {

        reject(r.statusText);
      };
      var params = Object.keys(data).map(
              function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
          ).join('&');
      r.send(params);
    });
  }

  c.makeGET = function(url) {
    return new Promise(function(resolve, reject) {

      var r = new XMLHttpRequest();

      r.addEventListener("load", function onLoad() {

        resolve(this.responseText);
      });
      r.open("GET", url);
      r.onerror = function () {

        reject(r.statusText);
      };
      r.send();
    });
  }
}
