$(document).ready(function() {

  
  $("#start-button").on("click", start);

  var time = 31
  var timeID

  function start() {
    clearInterval(timeID);
    timeID = setInterval(decreaseTime, 1000);
  }

  function decreaseTime() {
    time--;
    $("#time").html("<h2>" + time + " seconds remaing" + "</h2>");

  }

});