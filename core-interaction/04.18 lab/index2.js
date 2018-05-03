function onSuccess(position) {
  console.log(position)

  var x1= position.coords.longtitude
  var y1= position.coords.latitude
  var x2= -73.975536
  var y2=  40.691785


  var a = x1 - x2;
  var b = y1 - y2;

  var c = Math.sqrt( a*a + b*b );
console.log(c)

}
function onFailure(){


}


navigator.geolocation.getCurrentPosition(onSuccess, onFailure)
