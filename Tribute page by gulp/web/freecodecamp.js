 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $("#data").html("lati" + position.coords.latitude + "<br>long:" + position.coords.longtitude);
    });
  }
